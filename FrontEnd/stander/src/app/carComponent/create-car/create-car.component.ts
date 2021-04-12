import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/car';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  car:Car=new Car();

  constructor(private carService:CarService, private router:Router) { }

  ngOnInit(): void {
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
    this.saveCar();
  }

}
