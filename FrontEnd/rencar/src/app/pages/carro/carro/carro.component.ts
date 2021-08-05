import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servico/login.service';
import {ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/classe/car';
import { MatDialog } from '@angular/material/dialog';
import { CarroaddComponent } from "src/app/pages/carroadd/carroadd/carroadd.component";
import { Usuario } from 'src/app/classe/usuario';
import {Rented} from 'src/app/classe/rented';
import {TokenStorageService} from 'src/app/servico/token-storage.service';
import { CarrodetailComponent } from '../../carrodetail/carrodetail/carrodetail.component';


@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  cars:Car[];
  utilizador:Usuario;
  car:Car;
  id:number;
  userName:string;
  usuario:any;

  rented!:Rented;
  private roles: string[];
   authority: string;

  constructor(private carService:LoginService, private router:Router,private route:ActivatedRoute,
    public dialog:MatDialog, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    this.utilizador = this.carService.UsuarioValue;

    this.userName=<string> <unknown>this.tokenStorage.getUsername();
    this.carService.getUser(this.userName).subscribe(
      record=>{
        console.log(record);
          this.usuario=record;
          console.log(<string>this.usuario.id);
      }
    )
    // this.id = this.route.snapshot.params['id'];
    // this.car=new Car();
    // this.carService.getCarById(this.id).subscribe(data=>{
    //   console.log(data);
    //   this.car=data;
    // });

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
    console.log("aqui!!!");
   // console.log(this.getCars());
    this.getCars();
  }

  openDialog():void{

    const dialogRef = this.dialog.open(CarroaddComponent,{
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result=>{});
  }

  private getCars(){
    this.carService.getCarList().subscribe(data =>{
      this.cars=data;
    });
  }

  carDetails(id:number){
    this.router.navigate(['carrodetail',id])
  }

  rentCar(id:number){
     this.rented=new Rented();
      this.carService.getCarById(id).subscribe(data=>{
        console.log(data);
        this.rented.car=data;
      console.log(this.rented.car);
      this.rented.usuario=this.usuario;
      }, error =>console.log(error));


    console.log(this.rented);
    this.carService.alugar(this.rented)
      .subscribe(response=> console.log("Funcionou"),
      error=>console.log("Erro"));

  //  this.router.navigate(['alugado']);


  }

  updateCar(id:number){
    this.router.navigate(['carrodetail/',id])
  }

  deleteCar(id:number){
    this.carService.deleteCar(id).subscribe(data =>{
      console.log("Deletar");
      this.getCars();
    })
  }


}
