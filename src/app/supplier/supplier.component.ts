import {Component, EventEmitter, Input, Output,OnInit,ViewChild,ComponentRef,SimpleChange} from '@angular/core';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {DataTableModule,SharedModule,ContextMenuModule,MenuItem,Message} from 'primeng/primeng';
import {Suppliers} from './supplier.interfaces';
import {SupplierService} from '../_services/supplier.service';
import {SupplierListComponent} from './supplierlist.component';
import {AddSupplierComponent} from './addsupplier.component';
import {LeftSupplierComponent } from './leftsupplier.component';




@Component({
moduleId:module.id,
selector:'app-supp',
templateUrl:'supplier.component.html',
styleUrls:['supplier.component.css']
})
export class SupplierComponent implements OnInit
{
     
   private id;
   private sub: any;
   data:any;
    // @ViewChild(CustomersListComponent) childComp1:ComponentRef<CustomersListComponent>;
    // @ViewChild(AddCustomersComponent) childComp2:ComponentRef<AddCustomersComponent>;

   constructor(private route:ActivatedRoute,private supplierService:SupplierService) {
          supplierService.changeEmitted$.subscribe(res=>
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
    
   



