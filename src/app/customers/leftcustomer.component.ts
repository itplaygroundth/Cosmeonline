import {Component, EventEmitter, Input, Output,OnInit} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';
import {Customers} from './customers.interfaces';
import {Menu} from './menu';
import {CustomersService} from '../_services/customers.service';

@Component({
moduleId:module.id,
selector:'cust-leftmenu',
templateUrl:'leftcustomer.component.html',
styleUrls:['leftcustomer.component.css'],

//entryComponents:[LeftmenuComponent]

})
export class LeftCustomerComponent implements OnInit
{
      @Input() data:Customers; 
      currentCust:Customers;

     constructor(private customersService:CustomersService){
     this.customersService.changeEmitted$.subscribe(
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
    menus:Array<any>=[{head:'รายละเอียดลูกค้า',link:'list'},
        {head:'เพิ่ม/แก้ไขข้อมูลลูกค้า',link:'add'},
        {head:'รายงาน',link:'/report'}];
    //@Output() leftcustomer=new EventEmitter<Customers>();
  
    // changeRoute(url:string[])
    // {
    //     console.log(url);
      
    //     this._sharedService.emitChange(this.data);
    //     this.router.navigate(['/'+url[0]],{relativeTo:this.route});
    // }
    
}