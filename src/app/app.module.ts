import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { AppFirstChildComponent } from './first-child/first-child.component';
import { InboxComponent } from './child-route-sample/inbox/inbox.component';
import { ViewMailComponent } from './child-route-sample/view-mail/view-mail.component';
import { ColorizeRowDirective } from './attribute-directive-sample/colorize-row.directive';
import { UnReadRowDirective } from './attribute-directive-sample/unRead-row-directive';
import { PermissionDirective } from './structural-directive-sample/perimission.directive';
import { CardComponent } from './content-projection-sample/card.component';
import { LinearChartComponent } from './linear-char/linear-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

export const routes: Routes = [
  { 
    path: 'inbox', 
    component: InboxComponent,
    children: [
      {path:"view/:id", component: ViewMailComponent}
    ],
   
  },
    {path:'blog', loadChildren:"./lazy-module-sample/blog.module#BlogModule"}
];

@NgModule({
  declarations: [
    AppComponent,
    AppFirstChildComponent,
    ColorizeRowDirective,
    UnReadRowDirective,

    //Child-Route-Sample
    ViewMailComponent,
    InboxComponent,
    PermissionDirective,
    CardComponent,
    LinearChartComponent,
    PieChartComponent
    //Secondary-Route-Sample
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  
  bootstrap: [AppComponent],
  // schemas:[ NO_ERRORS_SCHEMA],
})
export class AppModule { }
