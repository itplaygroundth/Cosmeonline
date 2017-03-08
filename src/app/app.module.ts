import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {InputTextModule,ButtonModule,ConfirmDialogModule,DataTableModule,SharedModule,GrowlModule,ContextMenuModule,DialogModule,ConfirmationService} from 'primeng/primeng';
import {HeaderComponent} from './shared/header/header.component';

import {CustomersComponent} from './customers/customers.component';
import {CustomersListComponent} from './customers/customerslist.component';
import {LeftCustomerComponent} from './customers/leftcustomer.component';
import {AddCustomersComponent} from './customers/addcustomers.component';

import {SupplierComponent} from './supplier/supplier.component';
import {SupplierListComponent} from './supplier/supplierlist.component';
import {LeftSupplierComponent} from './supplier/leftsupplier.component';
import {AddSupplierComponent} from './supplier/addsupplier.component';
import {SupplierService} from './_services/supplier.service';

import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {StockComponent} from './stock/stock.component';
import {ReportComponent} from './report/report.component';
import {AboutComponent} from './about/about.component';
import {AppComponent } from './app.component';

import {routing} from './app.routing';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

// import {Modal} from './shared/component/modal.component';
import {LoginComponent} from './login/login.component';
import {AlertComponent} from './_directives/alert.component';
import {AuthenGuard} from './_guards/index';
import { AlertService, AuthenService, UserService,SharedService,CustomersService } from './_services/index';

/// import NgModule




@NgModule({
  declarations: [
    AppComponent,StockComponent,ReportComponent,AboutComponent,HeaderComponent,DashboardComponent,
    CustomersComponent,LeftCustomerComponent,AddCustomersComponent,CustomersListComponent,
    SupplierComponent,LeftSupplierComponent,AddSupplierComponent,SupplierListComponent,
    LoginComponent,AlertComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    DataTableModule,SharedModule,GrowlModule,ContextMenuModule,DialogModule
  ],
  providers: [AuthenGuard,AuthenService,AlertService,CustomersService,SupplierService,SharedService,ConfirmationService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
