 import {websocket} from "./websocket"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    private _ws:websocket = null;

    start () {
       this._ws = new websocket();
    }   
    btn_create(){
         
        this._ws.connect('ws://127.0.0.1:3000/')
    }

    btn_sendMsg(){
        this._ws.send_data(JSON.stringify({
            openid:11111,
            roomid:223333222
        }))
    }
    btn_close(){
        this._ws.close()
    }

    // update (dt) {}
}
