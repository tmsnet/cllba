import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS,RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import 'rxjs/Rx';

import {ProductListComponent} from './products/product-list.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {ProductService} from './products/product.service';
import {WelcomeComponent} from './home/welcome.component';
import {UserComponent} from './user.component';


@Component({
    selector:'pm-app',
    template:`
        <div>
            <nav class="navbar navbar-default">
                <div class="container">
                    <a class="navbar-brand">{{pageTitle}}</a>
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['Welcome']">Home</a></li>
                        <li><a [routerLink]="['Products']">Product List</a></li>
                        <li><a [routerLink]="['User']">User</a></li>
                    </ul>
                </div>
            </nav>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers:[ProductService,HTTP_PROVIDERS,ROUTER_PROVIDERS]
})
@RouteConfig([
    {path:'/welcome',name:'Welcome',component:WelcomeComponent,useAsDefault:true},
    {path:'/products',name:'Products',component:ProductListComponent},
    {path:'/product/:id',name:'ProductDetail',component:ProductDetailComponent},
    {path:'/user',name:'User',component:UserComponent}
])
export  class AppComponent{
    pageTitle:string = '磁力链吧(cllba.com)';
}