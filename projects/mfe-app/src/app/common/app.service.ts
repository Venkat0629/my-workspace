import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private baseUrl = 'http://localhost:8001/auth/';

    constructor(private http: HttpClient) {}

    saveUser(endpoint: string, data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${endpoint}`, data, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        });
    }
    logIn(endpoint: string, data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${endpoint}`, data, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        });
    }
}

