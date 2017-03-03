import {Component, EventEmitter, Input, Output,OnInit,SimpleChange} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {DataTableModule,SharedModule,ContextMenuModule,MenuItem,Message} from 'primeng/primeng';
import {Suppliers} from './supplier.interfaces';
import {SupplierService} from '../_services/supplier.service';
import { Router, ActivatedRoute } from '@angular/router';
import {SharedService} from '../_services/shared.service';

@Component({
moduleId:module.id,
selector:'app-supplist',
templateUrl:'supplierlist.component.html',
styleUrls:['supplierlist.component.css'],

})

export class SupplierListComponent implements OnInit
{
      
      selectedCust:Suppliers;
      public posts: any[];
      public cols:any[];
      errorMessage:string;
      status = {isopen: false};
      //@Input() name: string;
    constructor(private supplierService:SupplierService,private router:Router){}
    @Output() isopen:boolean=false;
    linktext1:string="เพิ่มคู่ค้าใหม่";
    
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
    this.supplierService.emitChange(this.selectedCust);
    this.linktext1="แก้ไขข้อมูลคู่ค้า";
   
    //this.router.navigate(['/add',{relativeTo:ActivatedRoute,data:this.selectedCust}]);
    }

    onRowUnselect($event)
    {

    }

    getCustomer(){
        this.supplierService.getAllSupplier()
                            .subscribe(
                            (data)=>this.posts=data,
                            error=>this.errorMessage=<any>error);
    }
    
}