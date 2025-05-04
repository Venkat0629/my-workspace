import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './app.user';
import { Task } from './app.task';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private baseUrl = 'http://localhost:8001';
    constructor(private http: HttpClient) { }

    saveUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/auth/signup`, user, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        });
    }

    logIn(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/login`, data, {
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

    addTask(userId: string, token: string, task: Task): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/users/${userId}/tasks`, task, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }),
        });
    }

    deleteTask(userId: string, token: string, taskId: number): Observable<User> {
        return this.http.delete<User>(`${this.baseUrl}/users/${userId}/tasks/${taskId}`, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }),
        });
    }

    updateTask(userId: string, token: string, taskId: number, status: boolean): Observable<User> {
        return this.http.patch<User>(`${this.baseUrl}/users/${userId}/tasks/${taskId}`, status, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }),
        });
    }


}

