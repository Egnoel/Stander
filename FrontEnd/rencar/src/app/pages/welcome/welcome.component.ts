import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Car } from 'src/app/classe/car';
import { Usuario } from 'src/app/classe/usuario';
import {TokenStorageService} from 'src/app/servico/token-storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  car:Car;
  id:number;
  usuario: Usuario;
  info: any;
  constructor(private token: TokenStorageService, private route: Router) { }
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }
  isCollapsed = false;

  logout() {
    this.token.signOut();
    this.route.navigateByUrl("/login");
  }

}
