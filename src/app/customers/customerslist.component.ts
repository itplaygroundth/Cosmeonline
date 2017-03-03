import {Component, EventEmitter, Input, Output,OnInit,SimpleChange} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {DataTableModule,SharedModule,ContextMenuModule,MenuItem,Message} from 'primeng/primeng';
import {Customers} from './customers.interfaces';
import {CustomersService} from '../_services/customers.service';
import { Router, ActivatedRoute } from '@angular/router';
import {SharedService} from '../_services/shared.service';

@Component({
moduleId:module.id,
selector:'app-custlist',
templateUrl:'customerslist.component.html',
styleUrls:['customerslist.component.css'],

})

export class CustomersListComponent implements OnInit
{
      
      selectedCust:Customers;
      public posts: any[];
      public cols:any[];
      errorMessage:string;
      status = {isopen: false};
      //@Input() name: string;
    constructor(private customerService:CustomersService,private router:Router){}
    @Output() isopen:boolean=false;
    linktext1:string="เพิ่มลูกค้าใหม่";
    
    ngOnInit(){
     this.getCustomer();
     this.cols=[
      {field:'code',header:'รหัส'},
      {field:'firstname',header:'ชื่อ'},
      {field:'lastname',header:'นามสกุล'},
      {field:'address',header:'ที่อยู่'},
      {field:'postcode',header:'รหัสไปรษณีย์'},
    ];
   
   
  }
    
    toggled() {
   let bool=this.isopen;
        this.isopen=bool===false?true:false;
    }
  

   onRowSelect(event)
    {
      // this.custselected=[];
      // this.custselected.push(
      //   { code:event.data.code,
      //     firstname:event.data.firstname,
      //     lastname:event.data.lastname,
      //     address:event.data.address,
      //     city:event.data.city,
      //     province:event.data.province,
      //     postcode:event.data.postcode,
      //     telephone:event.data.telephone,
      //     taxid:event.data.taxid
      //   });\
      //this.selectedCust=event;
     // console.log(event);
    this.customerService.emitChange(this.selectedCust);
    this.linktext1="แก้ไขข้อมูลลูกค้า";
   
    //this.router.navigate(['/add',{relativeTo:ActivatedRoute,data:this.selectedCust}]);
    }

    onRowUnselect($event)
    {

    }

    getCustomer(){
        this.customerService.getAllCustomers()
                            .subscribe(
                            (data)=>this.posts=data,
                            error=>this.errorMessage=<any>error);
    }
    
}