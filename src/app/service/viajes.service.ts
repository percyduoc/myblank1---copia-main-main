import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IViaje } from '../models/IViaje';




@Injectable({
  providedIn: 'root'
})
export class ViajesService {
   // private apiUrl = 'https://kvtpgtomhheyppcrztte.supabase.co/rest/v1/users';
   



  constructor(private http: HttpClient) {

  }
  postAddViajes(viaje: IViaje): Observable<any> {
    const url = "https://rpxrcdcsnkzjlihiydjl.supabase.co/rest/v1/Viajes"
    const headers = new HttpHeaders({
      'apikey': environment.supabaseKey,
      'Content-Type': 'application/json', // Specify content type for PATCH request
      'Prefer': 'return=minimal', 
  });
   

  const body = {
    origen: viaje.origen,
    destino: viaje.destino,
    id_pasajero: viaje.id_pasajero,
    metodopago: viaje.metodopago,
  };


    return this.http.post<any>(url, body, { headers, });
  }

  getViajes(): Observable<any> {
    const url = "https://rpxrcdcsnkzjlihiydjl.supabase.co/rest/v1/Viajes"
    const headers = new HttpHeaders({
      'apikey': environment.supabaseKey,
      'Authorization': `Bearer ${environment.supabaseKey}`,
    
    });
  
    const params = {
      select: '*'
    };
  
    return this.http.get<any>(url, { headers, params });
  }

  modificarViaje(viajeid: string): Observable<any> {
    const url = "https://rpxrcdcsnkzjlihiydjl.supabase.co/rest/v1/Viajes"
    const headers = new HttpHeaders({

      'apikey': environment.supabaseKey,
      'Authorization': `Bearer ${environment.supabaseKey}`,
      'Content-Type': 'application/json' // Specify content type for PATCH request
    });

    const body = {
      asistio: true
    };

    const params = {
      id: `eq.${viajeid}`
    };

    return this.http.patch<any>(url, body, { headers, params });
  }




  // https://rpxrcdcsnkzjlihiydjl.supabase.co/rest/v1/Viajes
}

// createAsistencia(asistenciaId: string, alumnoId: string): Observable<any> {
//   const headers = new HttpHeaders({
//     'apikey': environment.supabaseKey,
//     'Authorization': `Bearer ${environment.supabaseKey}`,
//     'Content-Type': 'application/json', // Specify content type for PATCH request
//     'Prefer': 'return=minimal',
//   });

//   const body = {
//     asistencia_id: asistenciaId,
//     alumno_id: alumnoId,
//   };

//   return this.http.post<any>(`${this.apiUrlAsistenciaAlumno}`, body, { headers, });
// }

