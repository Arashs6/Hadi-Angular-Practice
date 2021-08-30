import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Directive(  
    {
        selector:'[unRead]'
    }
)

export class UnReadRowDirective implements OnInit,OnChanges{
  
    @Input()
               
     set unRead(value:boolean){
         this.styleBasedOnUnread(value)
     };

constructor(private element : ElementRef){}
    
ngOnChanges(changes: SimpleChanges): void {

       

    }
    
ngOnInit(): void {
        
       
       
    }

    private styleBasedOnUnread(value:boolean) {
        
        if (this.elementIsUnread(value)){
            this.element.nativeElement.style.backgroundColor = 'red';}
            
            else{
                this.element.nativeElement.style.backgroundColor = 'blue';
            }
    }

    private elementIsUnread(value:boolean) {
        return value == false;
    }
}

 