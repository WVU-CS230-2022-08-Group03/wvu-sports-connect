export class EventItemModel{
    img: string;
    cardTitle: string;
    time: string;
    location: string;
    cardDesc: string;
    

    constructor(img: string, cardTitle: string, time: string, location: string, cardDesc: string,){
        this.img=img;
        this.cardTitle = cardTitle;
        this.time = time;
        this.location = location;
        this.cardDesc = cardDesc;
    }
}