import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ViajesService } from '../service/viajes.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-ingresoviaje',
  templateUrl: './ingresoviaje.page.html',
  styleUrls: ['./ingresoviaje.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IngresoviajePage implements OnInit {

  
  nuevoViaje: any = {
    id: null,
    origen: '',
    destino: '',
    id_pasajero: null,
    metodopago:''
  };
  listViaje: any;
  
  

  constructor(private router: Router, private viajesService: ViajesService) { }

  async ngOnInit() {
    this.listViaje = await firstValueFrom(this.viajesService.getViajes());
    console.log("lista usuario", this.listViaje)

  }

  volverinicio(){
    this.router.navigate(['/alumno']);
  }

  modificarViaje(viajeid: string): void {
    this.viajesService.modificarViaje(viajeid);

  }
           

  agregarUsuario() {
    this.viajesService.postAddViajes(this.nuevoViaje).subscribe(
      (response) => {
        // Procesa la respuesta aquí
        console.log('Usuario agregado con éxito:', response);
        // Limpia el formulario
        this.nuevoViaje = { id: null,origen: '',destino: '',id_pasajero: null,metodopago:'', };
      },
      (error) => {
        // Maneja los errores aquí
        console.error('Error al agregar usuario:', error);
      }
    );
  }


}
