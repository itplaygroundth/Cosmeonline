import {Injectable,Inject} from '@angular/core';
import {Http,Response, Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Customers} from './../customers/customers.interfaces'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CustomersService
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

    getAllCustomers():Observable<Customers[]>{
        return this.http.get('/customers/')
        .map((res:Response)=>res.json())
         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                //.map(res => res.json());
    };

    addCustomers(customer):Observable<Customers[]>{
        
        return this.http.post('/customers/',customer)
                        .map((res:Response)=>res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                        //.finally(()=>this.router.navigater(['CustomersPage']))
                       
    };

    updateCustomers(customer):Observable<Customers[]>{
        return this.http.put('/customers/',customer)
                        .map((res:Response)=>res.json())
                        .catch((error:any)=>Observable.throw(error.json().error || 'server error'));
    }
     deleteCustomers(customer):Observable<Customers[]>{
        return this.http.delete('/customers/',new RequestOptions({
                        headers:this.headers,
                        body:customer
                        }))
                        .map((res:Response)=>res.json())
                        .catch((error:any)=>Observable.throw(error.json().error || 'server error'));
    }
    genCode():Observable<Customers[]>{
        return this.http.get('/customers/last')
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