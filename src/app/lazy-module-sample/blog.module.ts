import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

export const routes: Routes = [
 {
   path:"view-post",component: BlogComponent
 }
]
@NgModule({
  declarations: [
    BlogComponent
  ],

  imports: [
    RouterModule.forChild(routes)
  ],
  
  bootstrap: [],
  // schemas:[ NO_ERRORS_SCHEMA],
})
export class BlogModule { }
