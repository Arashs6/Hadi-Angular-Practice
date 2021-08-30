import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive(  
    {
        selector:'[colorize]'
    }
)

export class ColorizeRowDirective implements OnInit{
  
    @Input()
       public colorize:number;
        
constructor(private element : ElementRef){}
    
ngOnInit(): void {
        
        
        var id = this.colorize
       this.element.nativeElement.style.backgroundColor = 'red'
    }
}

 