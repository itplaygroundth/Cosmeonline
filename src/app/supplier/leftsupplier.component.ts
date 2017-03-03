import {Component, EventEmitter, Input, Output,OnInit} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';
import {Suppliers} from './supplier.interfaces';
import {Menu} from './menu';
import {SupplierService} from '../_services/supplier.service';

@Component({
moduleId:module.id,
selector:'supp-leftmenu',
templateUrl:'leftsupplier.component.html',
styleUrls:['leftsupplier.component.css'],

//entryComponents:[LeftmenuComponent]

})
export class LeftSupplierComponent implements OnInit
{
      @Input() data:Suppliers; 
      currentCust:Suppliers;

     constructor(private supplierService:SupplierService){
     this.supplierService.changeEmitted$.subscribe(
            res=>{
                this.data=res;
                this.currentCust=res;
            });

    }
    ngOnInit(){
       // console.log(this.selection);
       // console.log(this.custSelected);
      //   console.log('From Parent:'+this.data);
    }
   
    //sendToAdd(_data:any)
    //{
    //    console.log(this.data)
         //this._sharedService.emitChange(this.data);
    //}
    menus:Array<any>=[{head:'รายละเอียดคู่ค้า',link:'list'},
        {head:'เพิ่ม/แก้ไขข้อมูลคู่ค้า',link:'add'},
        {head:'รายงาน',link:'/report'}];
    //@Output() leftcustomer=new EventEmitter<Customers>();
  
    // changeRoute(url:string[])
    // {
    //     console.log(url);
      
    //     this._sharedService.emitChange(this.data);
    //     this.router.navigate(['/'+url[0]],{relativeTo:this.route});
    // }
    
}