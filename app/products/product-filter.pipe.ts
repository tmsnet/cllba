import {PipeTransform,Pipe} from 'angular2/core';
import {IProduct} from './product';

@Pipe({
    name:"productFilter"
})
export class ProductFilterPipe implements PipeTransform{
    transform(value:IProduct[],args:string[]):IProduct[]{
        let filter = args[0] ? args[0].toLowerCase() : null;
        return filter ? value.filter((product:IProduct)=>product.productName.toLowerCase().indexOf(filter)!=-1) :value;
    }
}