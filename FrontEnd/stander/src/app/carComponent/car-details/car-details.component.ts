import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/car';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  id!:number;
  car!:Car;
  constructor(private route:ActivatedRoute, private carService:CarService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.car=new Car();
    this.carService.getCarById(this.id).subscribe(data=>{
      console.log(data);
      this.car=data;
    });
  }

  gotoCarList(){
    this.router.navigate(['api/cars']);
  }

}
