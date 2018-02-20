export const sockets = (socket, server) => {

  const appSocket = socket(server);

  appSocket.on('connection', (socket) => {

      console.log("Socket.io: User Connected" + socket.id);
      // Receiving Todos from client

        socket.on('toDoAdd', (toDo) => {

          socket.emit('todo')
        } );

        socket.on('userUpdate', (data) => {
          console.log("user updated", data);
          socket.emit('userUpdated', {data: data});
        } );

        socket.on('getMirror', (data) => {
          socket.emit('updateWeather', {weather: data.weather} );
        });


      socket.on('disconnect', function() {
          console.log("Socket.io: User Disconnected");
      });
  });
}
