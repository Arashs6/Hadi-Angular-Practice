
export class Mail {

    public id:number;
    public from:string;
    public body : string;
    public unRead : boolean;
    
    
        constructor(id : number, from: string,body:string,unRead:boolean){

            this.id = id;
            this.from = from;
            this.body = body;
            this.unRead = unRead;
        }

        markAsRead(){
            this.unRead = false
        }
}