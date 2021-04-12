import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './carComponent/car-list/car-list.component';
import { CreateCarComponent } from './carComponent/create-car/create-car.component';
import {FormsModule} from '@angular/forms';
import { RentedListComponent } from './carComponent/rented-list/rented-list.component';
import { UpdateCarComponent } from './carComponent/update-car/update-car.component';
import { CarDetailsComponent } from './carComponent/car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CreateCarComponent,
    RentedListComponent,
    UpdateCarComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
