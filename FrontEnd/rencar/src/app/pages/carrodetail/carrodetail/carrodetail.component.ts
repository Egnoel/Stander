import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servico/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/classe/car';
import {TokenStorageService} from 'src/app/servico/token-storage.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-carrodetail',
  templateUrl: './carrodetail.component.html',
  styleUrls: ['./carrodetail.component.css']
})
export class CarrodetailComponent implements OnInit {

  id:number;
  car:Car;
  private roles: string[];
  private authority: string;
  constructor(private route:ActivatedRoute, private carService:LoginService,
     private router:Router, private tokenStorage: TokenStorageService, public dialogRef:MatDialogRef<CarrodetailComponent>) { }

  ngOnInit(): void {
/*
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
*/
    this.id = this.route.snapshot.params['id'];
    this.car=new Car();
    this.carService.getCarById(this.id).subscribe(data=>{
      console.log(data);
      this.car=data;
    });
  }

  saveCar(){
    this.carService.updateCar(this.id, this.car).subscribe(data=>{
      console.log(data);
      this.car=new Car();
      this.gotoCarList();
    }, error => console.log(error));
  }

  gotoCarList(){
    this.router.navigate(['api/cars']);
  }
}
