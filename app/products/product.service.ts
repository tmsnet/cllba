import {Injectable} from 'angular2/core';
import {IProduct} from './product';
import {Http,Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ProductService {    
    private _productUrl = 'api/products/products.json'
    constructor(private _http:Http) {
        
    }
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
        //.do(data=>console.log('All:'+JSON.stringify(data)))
        .map((response:Response)=><IProduct[]>response.json())        
        .catch(this.handleError);        
    }
    private handleError(error:Response){
        console.log(error);
        return Observable.throw(error.json().error || 'server error');
    }
}