import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../../models/add-category-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCategoryService {

  constructor(private http:HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void>{
    return this.http.post<void>('https://localhost:7157/api/categories', model)
  }
}
