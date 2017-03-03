import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CustomersComponent} from './customers/customers.component';
import {CustomersListComponent} from './customers/customerslist.component';
import {AddCustomersComponent} from './customers/addcustomers.component';

import {SupplierComponent} from './supplier/supplier.component';
import {SupplierListComponent} from './supplier/supplierlist.component';
import {AddSupplierComponent} from './supplier/addsupplier.component';

import {UsersComponent} from './users/users.component';
import {StockComponent} from './stock/stock.component';
import {ReportComponent} from './report/report.component';
import {AboutComponent} from './about/about.component';

import {LoginComponent} from './login/login.component';
import {AuthenGuard} from './_guards/index';


const appRoutes:Routes=[
    {path:'',component:DashboardComponent,canActivate:[AuthenGuard],pathMatch:'full'},
    {path:'customers',component:CustomersComponent,canActivate:[AuthenGuard],
          children:[
              //{path:'',component:CustomersComponent},
              {path:'list',component:CustomersListComponent},
              {path:'add',component:AddCustomersComponent}
          ]},
    {path:'customers/add',component:AddCustomersComponent},
    
    {path:'supplier',component:SupplierComponent,canActivate:[AuthenGuard],
            children:[
                {path:'list',component:SupplierListComponent},
                {path:'add',component:AddSupplierComponent}
            ]},
    {path:'supplier/add',component:AddSupplierComponent},
    
    {path:'stock',component:StockComponent,canActivate:[AuthenGuard]},
    {path:'report',component:ReportComponent,canActivate:[AuthenGuard]},
    {path:'about',component:AboutComponent},

    //login
    {path:'login',component:LoginComponent},
    { path: '**', redirectTo: '' }
    
];



export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes)
