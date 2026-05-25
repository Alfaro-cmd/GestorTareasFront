import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token = signal<string | null>(null);

  token = this._token.asReadonly();

  estaAutenticado = computed(() => this._token() !== null);

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:3000/login', {
      email,
      password
    }).pipe(
      tap(res => {
        this._token.set(res.token);
      })
    );
  }

  logout() {
    this._token.set(null);
  }
}