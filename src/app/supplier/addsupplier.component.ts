import {Component, EventEmitter, Input, Output,OnInit,SimpleChange} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {DataTableModule,SharedModule,ContextMenuModule,MenuItem,Message} from 'primeng/primeng';
import {Suppliers} from './supplier.interfaces';
import {SupplierService} from '../_services/supplier.service';
import {SharedService} from '../_services/shared.service';
import {DialogModule,ConfirmationService} from 'primeng/primeng';

@Component({
moduleId:module.id,
selector:'app-addsupp',
templateUrl:'addsupplier.component.html',
styleUrls:['supplier.component.css'],
//inputs:['selectedCust']
//entryComponents:[LeftmenuComponent]

})
export class AddSupplierComponent implements OnInit
{
   public myForm: FormGroup;
   public submitted:boolean;
   public events:any[]=[];
   public posts: any[];
   public cols:any[];
   errorMessage:string;
   items: MenuItem[];
  // selectedCust: Customers;
   @Input() currentCust:Suppliers;
   data:Suppliers;
   msgs: Message[];
   private lefttitle:any[];
   display: boolean = false;
   @Input() modaltext:string;

    

   constructor(private _fb:FormBuilder,private supplierService:SupplierService,private confirmationService:ConfirmationService){
       
        this.supplierService.changeEmitted$.subscribe(
            res=>{
                this.data=res;
                this.currentCust=res;
            });
        // this._sharedService.changeEmitted$.subscribe(
        //     res=>{
        //         this.data=res;
                
        //     });
   }
//    ,private _sharedService: SharedService){

//        _sharedService.changeEmitted$.subscribe(
//         data => {
//             console.log('addcustomers:'+data);
//         });
//    }

   ngOnInit(){
     this.currentCust=this.supplierService.pdata;

     this.myForm = this._fb.group({
            code: [''],
            firstname: [''],
            lastname:[''],
            address:[''],
            city:[''],
            province:[''],
            postcode:[''],
            telephone:[''],
            taxid:['',[<any>Validators.required,<any>Validators.minLength(13)]]
        });
        this.subcribeToFormChanges();
       
        //console.log('From Parent:'+this.data);
       
   }

    ngAfterViewInit() {
        if(this.currentCust)
        {
            //console.log(this.currentCust);
            this.myForm.setValue({
                code:this.currentCust.code,
                firstname:this.currentCust.firstname,
                lastname:this.currentCust.lastname,
                address:this.currentCust.address,
                city:this.currentCust.city,
                province:this.currentCust.province,
                postcode:this.currentCust.postcode,
                telephone:this.currentCust.telephone,
                taxid:this.currentCust.taxid
            });
            
        }
    }
  
    
    del()
    {  
        if(this.currentCust)
        {
        //console.log(this.currentCust.code);
          this.supplierService.deleteSupplier(this.currentCust)
                              .subscribe(
                                  posts=>{
                                        this.showDialog("ลบรายการสำเร็จ");
                                        this.reset();
                                  },
                             error => {
                                 this.errorMessage=<any>error
                                 this.showDialog(this.errorMessage);
                             });
                            
        //                  });
                             
    }else
        this.showDialog("ไม่มีข้อมูล");
    }

      confirm() {
     
        this.confirmationService.confirm({
            message: 'ต้องการลบรายการนี้ ใช่หรือไม่?',
            header: 'แจ้งเตือน',
            icon: 'fa fa-trash',
            accept: () => {

            this.del();  
            }
        });
     
    }

   subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;
        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
        
        //console.log(this.selectedCust);
        
    }


    // getCustomer(){
    //     this.customerService.getAllCustomers()
    //                         .subscribe(
    //                         (data)=>this.posts=data,
    //                         error=>this.errorMessage=<any>error);
    // }
    
   save(model:Suppliers,isValid:boolean){
         this.submitted=true;
         
         if(!this.currentCust)
         {
                if(this.myForm.get("code").value)
                {
                    
                     this.supplierService.addSupplier(model)
                         .subscribe(
                             posts =>{ 
                                // this.posts=posts;
                                this.showDialog("บันทึกสำเร็จ");
                                 this.reset();
                                // this.submitted=false;
                             },
                             error => this.errorMessage=<any>error);
                }else
                {
                       
                        this.showDialog("ผิดผลาด!");
                }

             }else{
             
               this.supplierService.updateSupplier(model)
             .subscribe(
                 posts =>{ 
                    // console.log(posts)
                    this.showDialog("บันทึกสำเร็จ");
                     this.reset();
                    // this.submitted=false;
                 },
                 error => this.errorMessage=<any>error);
         }
         
  
   }
   Cancel(){
       this.reset();
   }

    reset(){
         this.myForm.reset();
        this.currentCust=null;
        this.supplierService.emitChange(this.currentCust);
    }

   showDialog(txt:string) {
        this.display = true;
        this.modaltext=txt;
    }

   keyDownFunction(event) {
          if(event.keyCode == 13) {
                alert('you just clicked enter');
    // rest of your code
      }
    }
    genCode()
    {
        this.supplierService.genCode()
            .subscribe(
                res=>{
                    console.log(res);
                   // this.currentCust.code=res;
                }
            );
    }

}