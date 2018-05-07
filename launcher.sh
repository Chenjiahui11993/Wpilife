#! /bin/bash
fuser -k 3000/tcp
fuser -k 5000/tcp
service redis_6379 start

cd ./WPI-Server
nodemon server.js &
cd ./exector
python3 executor_server.py &

echo "=========================="
read -p "press[enter] to terminate process" PRESSKEY
fuser -k 3000/tcp
fuser -k 5000/tcp
service redis_6379 stop
