
import { AuthService } from "../account-system/shared/services/auth.service";
export class MessageItemModel{

    
    userName: string;
    messageBody: string;

    constructor(userName: string, messageBody: string, auth: AuthService){
        
        this.userName = auth.userData.displayName;
        this.messageBody = messageBody;
    }
  
}