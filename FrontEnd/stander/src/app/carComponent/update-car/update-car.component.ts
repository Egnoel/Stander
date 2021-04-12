import { Component, OnInit } from '@angular/core';
import {Car} from 'src/app/car';
import {CarService} from 'src/app/car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  car!:Car;
  id!:number;
  constructor(private carService:CarService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.car = new Car();
    this.id = this.route.snapshot.params['id'];

    this.carService.getCarById(this.id).subscribe(data=>{
      console.log(data);
      this.car=data;
    }, error =>console.log(error));
  }

  updateCar(){
    this.carService.updateCar(this.id, this.car).subscribe(data=>{
      console.log(data);
      this.car=new Car();
      this.gotoCarList();
    }, error => console.log(error));
  }

  saveCar(){
    this.carService.addCar(this.car).subscribe(
      data =>{console.log(data);
        this.gotoCarList();
      },
      error =>console.log(error)
      
    );
  }

  gotoCarList(){
    this.router.navigate(['api/cars']);
  }

  onSubmit(){
    console.log(this.car);
    this.updateCar();
  }

}
