import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../models/UserModel';



@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlumnoPage implements OnInit {

  alumnoInfoReceived: UserModel | undefined;
  idUserHtmlRouterLink: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.alumnoInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
    // Si quiero obtener un valor por URL usando routerLink
    this.idUserHtmlRouterLink = this.activatedRoute.snapshot.params['id'];
    // Obteniendo el ID podria buscar en algún arreglo o BD el usuario con el id
    console.log("Valor obtenido desde URL: ",this.idUserHtmlRouterLink);
   }
  ngOnInit() {
  }


  volverinicio(){
    this.router.navigate(['/login']);
  }
  ingresarviaje(){
    this.router.navigate(['/ingresoviaje']);
  }
  viaje(){
    this.router.navigate(['/viaje']);
  }
  
}