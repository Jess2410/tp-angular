import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, map, Observable } from 'rxjs';
import { Product } from '../shared/product.model';
import PouchDB from 'pouchdb-browser'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProducts: Product[] = [];

setSelectedProducts(products: Product[]): void {
  this.selectedProducts = products;
}

private localDb;

constructor() {
  this.localDb = new PouchDB('phones');
  const remoteDb = new PouchDB(
    'https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones',
  );
  this.localDb.replicate.from(remoteDb, {
    live: true,
    retry: true,
  });
}

getAllDocs(): Observable<Product[]> {
  return from(
    this.localDb.allDocs({
      include_docs: true,
    }),
  ).pipe<Product[]>(
    map((data: any) => data.rows.map((r: any) => r.doc)),
  );
}

getDocById(id: string): Observable<Product> {
  return from(this.localDb.get(id) as Promise<Product>);
}

  /*constructor(private httpClient: HttpClient) { }

  getAllDocs(): Observable<Product[]> {
    const result = this.httpClient.get<Product[]>('https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones/_all_docs?include_docs=true');

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

  getDocById(product_id: string): Observable<Product> {
    return this.httpClient.get<Product>(`https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones/${product_id}`);
  }*/


}
