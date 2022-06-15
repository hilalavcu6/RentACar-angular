import { Brand } from '../models/brand';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private httpClient: HttpClient) {}
  updateBrand(brand: Brand): Observable<Brand> {
    return this.httpClient.post<Brand>('http:localhost:3000/brands/', brand);
  }
  getBrandlist(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>('http://localhost:3000/brands/');
  }
  deleteBrand(val: number): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/brands/' + val);
  }
  getBrandById(proId: number): Observable<Brand> {
    let newPath = 'http://localhost:3000/brands/' + proId;
    return this.httpClient.get<Brand>(newPath);
  }
}
