export class eventCardModel {

    img:string;
    eventName:string;
    time:number;
    Location:string;


    constructor( img:string,eventName:string,time:number,Location:string){
        this.img = img;
        this.eventName =eventName;
        this.time=time;
        this.Location=Location;
    }
}