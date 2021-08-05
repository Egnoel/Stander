import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlugadoComponent } from '../alugado/alugado/alugado.component';
import { CarroComponent } from '../carro/carro/carro.component';
import { CarroaddComponent } from '../carroadd/carroadd/carroadd.component';
import { CarrodetailComponent } from '../carrodetail/carrodetail/carrodetail.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent,
  children: [{
    path:'carro', component:CarroComponent
  },
  {path:'alugado', component:AlugadoComponent, children:[]},
  {path:'add', component:CarroaddComponent},
  {path:'carrodetail/:id', component:CarrodetailComponent},
]
},
{path:'', redirectTo:'/carro', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
