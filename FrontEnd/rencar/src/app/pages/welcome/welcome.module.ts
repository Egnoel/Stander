import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { AlugadoComponent } from '../alugado/alugado/alugado.component';
import { CarroComponent } from '../carro/carro/carro.component';
import { CarroaddComponent } from '../carroadd/carroadd/carroadd.component';
import { CommonModule } from '@angular/common';
import {CarrodetailComponent} from '../carrodetail/carrodetail/carrodetail.component';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { Observable } from 'rxjs';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    FormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    MatDialogModule,
    CommonModule
  ],
  declarations: [
    WelcomeComponent,
    CarroComponent,
    CarroaddComponent,
    CarrodetailComponent,
    AlugadoComponent
  ],

  exports: [WelcomeComponent,  CarrodetailComponent]
})
export class WelcomeModule { }
