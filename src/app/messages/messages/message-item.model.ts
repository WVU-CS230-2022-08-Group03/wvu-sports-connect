export class MessageItemModel{

    img: string;
    userName: string;
    messageBody: string;

    constructor(img: string, userName: string, messageBody: string){
        this.img = img;
        this.userName = userName;
        this.messageBody = messageBody;
    }
  
}