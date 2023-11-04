import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 // private apiUrl = 'https://kvtpgtomhheyppcrztte.supabase.co/rest/v1/users';
 private apiUrl = environment.supabaseUrl ;



 constructor(private http: HttpClient, private router: Router) {

}
getusuario(): Observable<any> {
  const url = "https://rpxrcdcsnkzjlihiydjl.supabase.co/rest/v1/Usuario?select=*"
  const headers = new HttpHeaders({
    'apikey': environment.supabaseKey,
    'Authorization': `Bearer ${environment.supabaseKey}`,
    'Range': '0-9'
  });

  const params = {
    select: '*'
  };

  return this.http.get<any>(url, { headers, params });
}


}
