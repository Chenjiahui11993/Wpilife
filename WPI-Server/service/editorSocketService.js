const redisClient = require('../modules/redisClient');
const TIMEOUT_IN_SECONDS = 3600;
module.exports = function (io) {
  // collaboration sessions
  const collaboration = {};
  // map from socketId to seessionid
  const sessionPath = '/wpi_sessions/';
  const socketidTosessionId = {};
  io.on('connection', (socket) => {
    //  const message = socket.handshake.query['message'];
    // console.log(message);
    //  io.to(socket.id).emit('message', 'hehehe from server');
    const sessionId = socket.handshake.query['sessionId'];
    socketidTosessionId[socket.id] = sessionId; // register the channel where each user in, socket.id is user, sessionId is channel
    if (sessionId in collaboration) {
      collaboration[sessionId]['participants'].push(socket.id);
    } else {
      redisClient.get(sessionPath + '/' + sessionId, data => {
        if (data) {
          console.log('pulling from redis');
          collaboration[sessionId] = {
            'cachaedInstructions': JSON.parse(data),
            'participants': []
          };
        } else {
          console.log('create new session');
          collaboration[sessionId] = {
            'cachaedInstructions': [],
            'participants': []
          }
        }
        collaboration[sessionId]['participants'].push(socket.io);
      })
    }
    // if (!(sessionId in collaboration)) {  // if there is no one in the channel
    //   collaboration[sessionId] = {
    //     'participants': []
    //   };
    // }
    // collaboration[sessionId]['participants'].push(socket.id);
    // {
    //    1: {
    //        'participants':[socket.io]
    //       }
    // }
    socket.on('change', delta => {
      const sessionId = socketidTosessionId[socket.id];
      if (sessionId in collaboration) {
        collaboration[sessionId]['cachaedInstructions'].push(['change', delta, Date.now()]);
      }
      if (sessionId in collaboration) {
        const participants = collaboration[sessionId]['participants'];
        participants.forEach(participant => {
          if (socket.id === participant) {
            // do nothing, when the system find the user is the one who change the editor
          } else {
            io.to(participant).emit('change', delta); // send to other user in a same channel
          }
        });
      } else {
        console.log('error');
      }
    });
    socket.on('restoreBuffer', () => {
      const sessionId = socketidTosessionId[socket.id];
      if (sessionId in collaboration) {
        const instructions = collaboration[sessionId]['cachaedInstructions'];
        for (let instruction of instructions) {
          socket.emit(instruction[0], instruction[1]);
        }
      }
    });
    socket.on('disconnect', () => {
      const sessionId = socketidTosessionId[socket.id];
      let foundAndRemove = false;
      if (sessionId in collaboration) {
        const participants = collaboration[sessionId]['participants'];
        const index = participants.indexOf(socket.id);
        if (index >= 0) {
          participants.slice(index, 1);
          foundAndRemove = true;
          if (participants.length === 0) {
            //  last user
            const key = sessionPath + '/' + sessionId;
            const value = JSON.stringify(collaboration[sessionId]['cachaedInstructions']);
            redisClient.set(key, value, redisClient.redisPrint);
            redisClient.expire(key, TIMEOUT_IN_SECONDS);
            delete collaboration[sessionId];
          }
        }
      }
      if (!foundAndRemove) {
        console.error('something wrong here');
      }
    });
  });
}