import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './app.user';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private baseUrl = 'http://localhost:8001';

    constructor(private http: HttpClient) { }

    saveUser(endpoint: string, data: User): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/auth/${endpoint}`, data, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        });
    }
    logIn(endpoint: string, data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/${endpoint}`, data, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        });
    }
    getUser(token: string): Observable<User> {
        return this.http.get<User>(`${this.baseUrl}/users/me`, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }),
        });
    }
}

