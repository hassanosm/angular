
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface menu_items {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class menu_itemsService {
  private apiUrl = 'http://localhost:8090/menu_items'; 

  constructor(private http: HttpClient) {}

  getFoods(): Observable<menu_items[]> {
    return this.http.get<menu_items[]>(this.apiUrl);
  }

  addFood(menu_items: menu_items): Observable<menu_items> {
    return this.http.post<menu_items>(this.apiUrl, menu_items);
  }

  removeFood(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
