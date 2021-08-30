import { Component} from '@angular/core';
import { Mail } from '../shared/main';
import { Router } from '@angular/router';
import { routes } from 'src/app/app.module';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html'
})
export class InboxComponent {
    
  public mails : Array<Mail>;

    constructor(private router : Router) {
      this.mails = new Array<Mail>();
      this.mails.push(new Mail(1,"Arash","Hello",true));
      this.mails.push(new Mail(2,"Brash","Hello",true));
      this.mails.push(new Mail(3,"Crash","Hello",false));
      this.mails.push(new Mail(4,"Drash","Hello",false));
      this.mails.push(new Mail(5,"Erash","Hello",false));
      
    }

    view(mail: Mail){      
      mail.markAsRead()
      this.router.navigate(['inbox/view',mail.id])
    }

  
}
