import {Injectable,Inject} from '@angular/core';
import {Http,Response, Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Suppliers} from './../supplier/supplier.interfaces'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SupplierService
{
    public headers: Headers;
    public success:any;

     public pdata:any;
    // Observable string sources
    private emitChangeSource = new Subject<any>();
    // Observable string streams
    changeEmitted$ = this.emitChangeSource.asObservable();
    // Service message commands
    emitChange(change: any) {
        this.emitChangeSource.next(change);
        this.pdata=change;
    }

    constructor(private http: Http){ }

    getAllSupplier():Observable<Suppliers[]>{
        return this.http.get('/supplier/')
        .map((res:Response)=>res.json())
         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                //.map(res => res.json());
    };

    addSupplier(customer):Observable<Suppliers[]>{
        
        return this.http.post('/supplier/',customer)
                        .map((res:Response)=>res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                        //.finally(()=>this.router.navigater(['SupplierPage']))
                       
    };

    updateSupplier(customer):Observable<Suppliers[]>{
        return this.http.put('/supplier/',customer)
                        .map((res:Response)=>res.json())
                        .catch((error:any)=>Observable.throw(error.json().error || 'server error'));
    }

     deleteSupplier(customer):Observable<Suppliers[]>{
        return this.http.delete('/supplier/',new RequestOptions({
                        headers:this.headers,
                        body:customer
                        }))
                        .map((res:Response)=>res.json())
                        .catch((error:any)=>Observable.throw(error.json().error || 'server error'));
    }

    genCode():Observable<Suppliers[]>{
        return this.http.get('/supplier/last')
                   .map((res:Response)=>res.json())
                   .catch((error:any)=>Observable.throw(error.json().error || 'server error'));
    }
    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
      }
    // private extractData(res: Response) {
    //     let body = res.json();
    //     return body.data || { };
    //   }
    //   private handleError (error: Response | any) {
    //     // In a real world app, we might use a remote logging infrastructure
    //     let errMsg: string;
    //     if (error instanceof Response) {
    //       const body = error.json() || '';
    //       const err = body.error || JSON.stringify(body);
    //       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //     } else {
    //       errMsg = error.message ? error.message : error.toString();
    //     }
    //     console.error(errMsg);
    //     return Observable.throw(errMsg);
    //   }

}