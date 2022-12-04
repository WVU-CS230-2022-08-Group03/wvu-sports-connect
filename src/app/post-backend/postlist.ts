export class PostItemModel{

    cardTitle: string;
    time: string;
    location: string;
    cardDesc: string;
    

    constructor(cardTitle: string, time: string, location: string, cardDesc: string,){
    
        this.cardTitle = cardTitle;
        this.time = time;
        this.location = location;
        this.cardDesc = cardDesc;
    }
}