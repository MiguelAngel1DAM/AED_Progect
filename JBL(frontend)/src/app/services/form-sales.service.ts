import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormSalesService {
  private endpoint = 'http://localhost:8080/sales';

  constructor(private httpClient: HttpClient) { }

  crearVenta(clienteId: number, productoId: number): Observable<any> {
    const params = new HttpParams()
      .set('clienteId', clienteId.toString())
      .set('productoId', productoId.toString());
  
    return this.httpClient.post<any>(this.endpoint, null, { params: params });
  }
  
  
  getUser(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.endpoint);
  }

  getHeadset(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.endpoint);
  }
  
  borrarVenta(id: number): Observable<void> {
    const url = `${this.endpoint}/${id}`;
    return this.httpClient.delete<void>(url);
  }  

  getVentas(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.endpoint).pipe(
      tap((ventas) => console.log('Ventas obtenidas:', ventas)),
    );
  }
  
}
