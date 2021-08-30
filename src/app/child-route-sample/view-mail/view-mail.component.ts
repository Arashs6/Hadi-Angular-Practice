import { Component} from '@angular/core';
import { Mail } from '../shared/main';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-mail',
  templateUrl: './view-mail.component.html'
})
export class ViewMailComponent {

  public currentId:number;

  constructor(private route:ActivatedRoute){
        route.params.subscribe(params=>{
          this.currentId =  params.id
        })
      }
}