import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/classe/car';
import { Usuario } from 'src/app/classe/usuario';
import { LoginService } from 'src/app/servico/login.service';
import {Rented} from 'src/app/classe/rented';
import {TokenStorageService} from 'src/app/servico/token-storage.service';

@Component({
  selector: 'app-alugado',
  templateUrl: './alugado.component.html',
  styleUrls: ['./alugado.component.css']
})
export class AlugadoComponent implements OnInit {
  renteds:Rented[];
  cars:Car[];
  utilizador:Usuario;
  private roles: string[];
   authority: string;
   userName:string;
  usuario:any;

  constructor(private carService:LoginService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this. getRented();
    this.utilizador = this.carService.UsuarioValue;
    //console.log(this.utilizador.perfil);

    this.userName=<string> <unknown>this.tokenStorage.getUsername();
    this.carService.getUser(this.userName).subscribe(
      record=>{
        console.log(record);
          this.usuario=record;
          console.log(<string>this.usuario.id);
      }
    )

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }





  getRented(){
    this.carService.getRentedList().subscribe(data =>{
      this.renteds=data;
    });
  }

  devolver(id:number){
    this.carService.retrieve(id);
  }



  deleteCar(id:number){
    this.carService.deleteCar(id).subscribe(data =>{
      console.log("Deletar");
      this.getRented();
    })
  }


}
