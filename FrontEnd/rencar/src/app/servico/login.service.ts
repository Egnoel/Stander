import { Injectable } from '@angular/core';
import { Usuario } from '../classe/usuario';
import { Observable, BehaviorSubject } from 'rxjs';
import {Car} from 'src/app/classe/car';
import {Rented} from 'src/app/classe/rented';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import { stringify } from '@angular/compiler/src/util';

//const
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarioSu: BehaviorSubject<Usuario>;
  usuario: Observable<Usuario>;
  //id:string;
  userUrl="http://localhost:8080/api/user";
  baseUrl="http://localhost:8080/api/cars";
  constructor(private http: HttpClient, private token: TokenStorageService) {
    this.usuarioSu = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuario')));
    this.usuario = this.usuarioSu.asObservable();
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization':`Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrb2ppIiwiaWF0IjoxNjE5NTQyNDM4LCJleHAiOjE2MTk2Mjg4Mzh9.FB_Rq48nf9wCvz8tywfgIB3Zf15gbaCdxKpzGFuaWuoJ6jisHLjKe54EkJOYdvVbfXfUMsns_5rBfDepEehTzg` })
  };

  public get UsuarioValue(): Usuario{
    return this.usuarioSu.value;
  }

  public login(usuarios: Usuario){
    return this.http.post<Usuario>("http://localhost:8080/login",usuarios)
          .pipe(map( usuario=>{
                localStorage.setItem('usuario',JSON.stringify(usuario));
                this.usuarioSu.next(usuario);
                return usuario;
          }));
  }

  logout(){
    localStorage.removeItem('usuario');
    this.usuarioSu.next(null);
    //this.router.navigaate(['/login'])
  }

  public getUser(username:string):Observable<Object>{
      return this.http.get(`${this.userUrl}/${username}`,this.httpOptions)
  }

  public loginUsuario(usuario: Usuario):Observable<any>{
   return this.http.post<any>("http://localhost:8080/login",usuario)
  }

  getCarList():Observable<Car[]>{
    return this.http.get<Car[]>(this.baseUrl, this.httpOptions);
  }

  addCar(car:Car, id:number):Observable<Object>{
    return this.http.post<Object>(`${this.baseUrl}/${id}`, car, this.httpOptions);
  }

  getRentedList():Observable<Rented[]>{
    return this.http.get<Rented[]>(`${this.baseUrl}/rented`, this.httpOptions);
  }

  getCarById(id:number):Observable<Car>{
    return this.http.get<Car>(`${this.baseUrl}/${id}`, this.httpOptions);
  }

  updateCar(id:number, car:Car):Observable<Car>{
    return this.http.put<Car>(`${this.baseUrl}/${id}`,car, this.httpOptions);
  }
  alugar(rented:Rented ):Observable<any>{


    return this.http.post<any>(`${this.baseUrl}/rent/`, rented,this.httpOptions)
  }

  deleteCar(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`, this.httpOptions)
  }

  retrieve(id:number):Observable<Object>{
    console.log(`${this.baseUrl}/rented/${id}`);
    return this.http.delete(`${this.baseUrl}/rented/${id}`, this.httpOptions)
  }

}
