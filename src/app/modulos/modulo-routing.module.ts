import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';

const routes: Routes = [
  {path: '',
    children:[
      {path: 'inicio',component:InicioComponent},
      {path: 'nosotros',component:NosotrosComponent},
      {path: 'servicios',component:ServiciosComponent},
      {path: 'contactanos',component:ContactanosComponent},
      {path: '**', redirectTo:'inicio'},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModuloRoutingModule { }
