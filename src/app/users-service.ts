import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  backendUrl = "http://localhost:3000"
  private httpClient = inject(HttpClient)

  async getAllUsersWithFetch(): Promise<Users[]>{
    const data = await fetch(`${this.backendUrl}/users`);
    return (await data.json()) ?? [];
  }

  getAllUsers(): Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${this.backendUrl}/users`)
  }

  getUserById(id: string | null): Observable<Users | undefined>{
    return this.httpClient.get<Users>(`${this.backendUrl}/users/${id}`)
  }
}
