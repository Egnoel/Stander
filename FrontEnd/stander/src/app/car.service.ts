import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car';
import {Rented} from './rented';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl="http://localhost:8080/api/cars";

  constructor(private httpClient:HttpClient) { }

  getCarList(): Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${this.baseUrl}`);
  }

  addCar(car:Car):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/add/1`,car);
  }

  getRentedList():Observable<Rented[]>{
    return this.httpClient.get<Rented[]>(`${this.baseUrl}/alugados`);
  }

  getCarById(id:number):Observable<Car>{
    return this.httpClient.get<Car>(`${this.baseUrl}/${id}`);
  }

  updateCar(id:number, car:Car):Observable<Car>{
    return this.httpClient.put<Car>(`${this.baseUrl}/${id}`, car);

  }

  deleteCar(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  deleteRented(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/devolvidos/${id}`);
  }

  alugar(id:number, rented:Rented):Observable<Object>{
    console.log(`${this.baseUrl}/aluguel/1/${id}`);
    return this.httpClient.post(`${this.baseUrl}/aluguel/1/${id}`, rented);
  }

}
