module.exports = function (io) {
  // collaboration sessions
  const collaboration = {};
  // map from socketId to seessionid
  const socketidTosessionId = {};
  io.on('connection', (socket) => {
    //  const message = socket.handshake.query['message'];
    // console.log(message);
    //  io.to(socket.id).emit('message', 'hehehe from server');
    const sessionId = socket.handshake.query['sessionId'];
    socketidTosessionId[socket.id] = sessionId; // register the channel where each user in, socket.id is user, sessionId is channel
    if (!(sessionId in collaboration)) {  // if there is no one in the channel
      collaboration[sessionId] = {
        'participants': []
      };
    }
    collaboration[sessionId]['participants'].push(socket.id);
    // {
    //    1: {
    //        'participants':[socket.io]
    //       }
    // }
    socket.on('change', delta => {
      const sessionId = socketidTosessionId[socket.id];
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
    })
  });
}