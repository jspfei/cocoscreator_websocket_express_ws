const { ccclass, property } = cc._decorator;

@ccclass
export class  websocket  {
    sock:WebSocket = null

    on_open(){
        console.log('client open')
        this.send_data(JSON.stringify({
            stype:'auth',
            ctype:'login',
            data:{
                name:'jjjjjjs',
                pwd:1111
            }
        }))
    }

    on_message(event){
        console.log('clent rcv data = ' + event.data)
    }

    on_close(){
        console.log('client close')
        this.close();
    }

    on_error(){
        this.close();
    }

    close(){
        if(this.sock){
            this.sock.close();
            this.sock = null;
        }
    }

    connect(url:string){
        this.sock = new WebSocket(url);
        this.sock.onopen = this.on_open.bind(this);
        this.sock.onclose = this.on_close.bind(this);
        this.sock.onmessage = this.on_message.bind(this);
        this.sock.onerror = this.on_error.bind(this);
    }

    send_data(data){
        if(this.sock){
            this.sock.send(data);
        }
        
    }
}
 