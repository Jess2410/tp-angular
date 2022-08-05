import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Products } from '../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllDocs(): Observable<Products[]> {
    const result = this.httpClient.get<Products[]>('https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones/_all_docs?include_docs=true');

    return result.pipe(
        map((response: any) => {
            return response.rows.map((row: any) => {
                const doc = row.doc;
                delete doc._rev;

                return doc;
            });
        }),
    );

  }

  // getDocById(product_id: string): Observable<Products[]> {
  //   const result = this.httpClient.get<Products[]>(`https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones/${product_id}`);

  // }

}
