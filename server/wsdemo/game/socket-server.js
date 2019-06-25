const SocketServer = function (server) {
    var WebSocket=require('ws');
    var io=new WebSocket.Server({server})
    io.on('connection',function(ws){
        console.log(`[SERVER] connection()`);
        ws.on('close',function(){
            console.log(`[SERVER] Closed: `);
        })
        ws.on('error',function(){
             console.log(`[SERVER] Error: `);
        })
        ws.on('message', function (message) {
            console.log("接受消息");
            console.log(`[SERVER] Received: ` +message);
            let data = {}
            data.command = 101;
            data.msg = {'sss':101}

            ws.send( JSON.stringify(data), (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
        })
    })
    return io;
};
module.exports = SocketServer;