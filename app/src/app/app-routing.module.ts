import { FourthComponent } from './component/fourth/fourth.component';
import { ThirdComponent } from './component/third/third.component';
import { SecondComponent } from './component/second/second.component';
import { FirstComponent } from './component/first/first.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'third', component: ThirdComponent},
  {path: 'fourth', component: FourthComponent},
  {
    path: '',
    redirectTo: '/first',
    pathMatch: 'full'
  },
  {
    path: '**', component: SecondComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
