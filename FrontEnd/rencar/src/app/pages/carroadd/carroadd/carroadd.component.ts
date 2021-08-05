import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servico/login.service';
import { Router } from '@angular/router';
import { Car } from 'src/app/classe/car';
import {MatDialogRef} from '@angular/material/dialog';
import {TokenStorageService} from 'src/app/servico/token-storage.service';


@Component({
  selector: 'app-carroadd',
  templateUrl: './carroadd.component.html',
  styleUrls: ['./carroadd.component.css']
})
export class CarroaddComponent implements OnInit {
  id:string;
  car: Car = new Car();
  usuario:any;
  private authority: string;
  constructor(private carService:LoginService,
    public dialogRef:MatDialogRef<CarroaddComponent>,
    private router:Router, private token: TokenStorageService) {

  }

  ngOnInit(): void {
    this.id=<string> <unknown>this.token.getUsername();
    this.carService.getUser(this.id).subscribe(
      record=>{
        console.log(record);
          this.usuario=record;
          console.log(<string>this.usuario.id);
      }
    )
  }

  saveCar(){
    this.carService.addCar(this.car,this.usuario.id).subscribe(
      data =>{//console.log(data);
        window.location.reload();
        this.gotoCarList();

      },
      error =>console.log(error)

    );
  }

  cancelar(){
    this.dialogRef.close();
  }

  gotoCarList(){
    this.router.navigate(["carro"]);
  }

  onSubmit(){
   // console.log(this.car);
    this.saveCar();
  }

}
