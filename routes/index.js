module.exports = function Route(app, server){
  var io = require("socket.io").listen(server);
  app.get("/", function(req,res){
    res.render("result");
  })
  // app.get("/css", function(req,res){
  //   res.render("style");
  // })
  io.sockets.on('connection', function(socket){
    socket.on("posting_form", function(data){
      // console.log(data);
      var random_number = Math.floor((Math.random()*1000)+1);
      socket.emit("updated_message", {response:data});
      socket.emit("random_number", {response:random_number});
    })
  })

};
