import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserModel } from '../models/UserModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConductorPage implements OnInit {

  conductorInfoReceived: UserModel | undefined;

  constructor(private router: Router) {
    this.conductorInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
   }

  ngOnInit() {
  }
  volverinicio(){
    this.router.navigate(['/login']);
  }
  auto(){
    this.router.navigate(['/auto']);
  }
  
  

}