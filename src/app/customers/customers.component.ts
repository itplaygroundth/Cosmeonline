import {Component, EventEmitter, Input, Output,OnInit,ViewChild,ComponentRef,SimpleChange} from '@angular/core';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {DataTableModule,SharedModule,ContextMenuModule,MenuItem,Message} from 'primeng/primeng';
import {Customers} from './customers.interfaces';
import {CustomersService} from '../_services/customers.service';
import {CustomersListComponent} from './customerslist.component';
import {AddCustomersComponent} from './addcustomers.component';
import {LeftCustomerComponent } from './leftcustomer.component';




@Component({
moduleId:module.id,
selector:'app-cust',
templateUrl:'customers.component.html',
styleUrls:['customers.component.css']
})
export class CustomersComponent implements OnInit
{
     
   private id;
   private sub: any;
   data:any;
    // @ViewChild(CustomersListComponent) childComp1:ComponentRef<CustomersListComponent>;
    // @ViewChild(AddCustomersComponent) childComp2:ComponentRef<AddCustomersComponent>;

   constructor(private route:ActivatedRoute,private customersService:CustomersService) {
          customersService.changeEmitted$.subscribe(res=>
        {
            this.data=res;
            //console.log(this.data);
        });
      }

  

    ngOnInit(){}
 
    ngOnDestroy() {
        //   this.destroyChildCmp();
          }
    destroyChildCmp(){
        // if(this.childComp1){
        //     this.childComp1.destroy();
        //  if(this.childComp2)
        //     this.childComp2.destroy();
        //}
    }
//    gotoComponent(link:string){
//         switch(link){
//             case'list':
//             this.aselector="<app-custlist><app-custlist>";
//         }
   }    
    
   



