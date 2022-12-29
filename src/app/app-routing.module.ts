import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'modulos',
    loadChildren:()=>import('./modulos/modulos.module').then(m => m.ModulosModule)
  },
  {
    path:'**',
    redirectTo:'modulos'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
