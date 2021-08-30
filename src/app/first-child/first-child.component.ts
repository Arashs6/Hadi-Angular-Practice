import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html'
})
export class AppFirstChildComponent {

    @Input()
    public value:number;

    @Output()
    public valueChange = new EventEmitter();

    @Output()
    public removed = new EventEmitter();

    remove() : void{
      alert("alert from child component");
      this.removed.emit(this.value);
    }

    increase():void{
      this.value++;
      this.valueChange.emit(this.value);
    }
}
