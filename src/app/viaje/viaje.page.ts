import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ViajesService } from '../service/viajes.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViajePage implements OnInit {
  listViaje: any;
  addViaje: any;

  constructor(private router : Router, private viaje: ViajesService) { }

  async ngOnInit() {
    this.listViaje = await firstValueFrom(this.viaje.getViajes());
    console.log("lista usuario", this.listViaje)

  }

}
