import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ActivatedRoute } from '@angular/router';
import { FourthComponent } from './fourth/fourth.component';
import { Routestatus } from './third/third.component';
const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'fourth', component: FourthComponent },
  { path: '**', redirectTo: "", pathMatch: 'full' }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}