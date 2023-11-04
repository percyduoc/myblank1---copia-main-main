import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
 // private apiUrl = 'https://kvtpgtomhheyppcrztte.supabase.co/rest/v1/users';
 private apiUrl = environment.supabaseUrl ;



 constructor(private http: HttpClient, private router: Router) {

}
getAlumnos(): Observable<any> {
  const url = "https://rpxrcdcsnkzjlihiydjl.supabase.co/rest/v1/Pasajero"
  const headers = new HttpHeaders({
    'apikey': environment.supabaseKey,
    'Authorization': `Bearer ${environment.supabaseKey}`
   
  });

  const params = {
    select: '*'
  };

  return this.http.get<any>(url, { headers, params });
}


}
