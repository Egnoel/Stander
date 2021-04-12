import { Component, OnInit } from '@angular/core';
import {Rented} from 'src/app/rented';
import {CarService} from 'src/app/car.service';


@Component({
  selector: 'app-rented-list',
  templateUrl: './rented-list.component.html',
  styleUrls: ['./rented-list.component.css']
})
export class RentedListComponent implements OnInit {

  renteds!:Rented[];

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getRented();
  }

  getRented(){
    this.carService.getRentedList().subscribe(data =>{
      this.renteds=data;
    });
  }

  devolver(id:number){
    this.carService.deleteRented(id).subscribe(data=>{
      console.log(data);
      this.getRented();
    });

  }

}
