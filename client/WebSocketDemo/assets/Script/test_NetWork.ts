import {NetWork,clientDefine} from "./NetWork"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    
    onLoad () {
        //监听 ws 连接状态
        cc.systemEvent.on(clientDefine.clientDefine_open,this.openHandler,this);
        cc.systemEvent.on(clientDefine.clientDefine_close,this.closeHandler,this);
        cc.systemEvent.on(clientDefine.clientDefine_failed,this.failedHandler,this);
    }
  //监听断开连接
  closeHandler(){
    console.log("ws  close")
}
//连接成功
openHandler(){
    console.log("ws  open")
}
//连接失败
failedHandler(){
    console.log("ws  failed")
}
//发送消息
btn_onclick(){
    let data= {'name':1};

    NetWork.getInstance().sendMsg(data,101)
  
}
//断开连接
btn_close(){
    NetWork.getInstance().closeNetWork(true)
    NetWork.getInstance().removeDelegate(this);
}
//创建连接
btn_create(){
    NetWork.getInstance().connect("ws://127.0.0.1:3000/", false);
    NetWork.getInstance().addDelegate(this);

}
/**
    * 收消息
    * @param message 消息
    */
    public onMsg(message: any): boolean {
        switch (message.command) {
            case 101: {
                console.log(JSON.stringify(message))
                return true; // 返回reture表示消息只在这里处理，不在往下传递
            }
        }
        return false;
    }
 
    onDestroy(){
        NetWork.getInstance().removeDelegate(this);
    }
    // update (dt) {}
}
