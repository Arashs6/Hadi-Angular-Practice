import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
  selector: '[permission]',

})
export class PermissionDirective implements OnInit {

    
  @Input()
  public permission:string;

  /**
   *
   */
  constructor(private templateRef : TemplateRef<any>,
              private viewContainer : ViewContainerRef) {}
 
  ngOnInit(): void {
    //this.viewContainer.clear();

    if(this.permission == "X"){   this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }
  
}
