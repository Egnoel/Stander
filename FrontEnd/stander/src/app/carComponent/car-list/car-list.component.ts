import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Car} from 'src/app/car';
import {CarService} from 'src/app/car.service';
import { Rented } from 'src/app/rented';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars!:Car[];
  rented!:Rented;


  constructor(private carService:CarService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCars();
    this.rented=new Rented();
  }

  private getCars(){
    this.carService.getCarList().subscribe(data =>{
      this.cars=data;
    });
  }

  carDetails(id:number){
    this.router.navigate(['car-details',id])
  }

  rentCar(id:number){

    this.carService.getCarById(id).subscribe(data=>{

      this.rented.car=data;
    }, error =>console.log(error));

    this.carService.alugar(id, this.rented);
   // this.router.navigate(['rented-list']);

  }

  updateCar(id:number){
    this.router.navigate(['update-car',id])
  }

  deleteCar(id:number){
    this.carService.deleteCar(id).subscribe(data =>{
      console.log(data);
      this.getCars();
    })
  }

}
