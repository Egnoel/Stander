import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './carComponent/car-details/car-details.component';
import { CarListComponent } from './carComponent/car-list/car-list.component';
import { CreateCarComponent } from './carComponent/create-car/create-car.component';
import { RentedListComponent } from './carComponent/rented-list/rented-list.component';
import { UpdateCarComponent } from './carComponent/update-car/update-car.component';

const routes: Routes = [
  {path:'api/cars', component:CarListComponent},
  {path:'create-car', component:CreateCarComponent},
  {path:'rented-list', component:RentedListComponent},
  {path:'update-car/:id', component:UpdateCarComponent},
  {path:'car-details/:id', component:CarDetailsComponent},
  {path:'', redirectTo:'api/cars', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
