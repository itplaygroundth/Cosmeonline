import {Component, EventEmitter, Input, Output,OnInit,SimpleChange} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {DataTableModule,SharedModule,ContextMenuModule,MenuItem,Message} from 'primeng/primeng';
import {Customers} from './customers.interfaces';
import {CustomersService} from '../_services/customers.service';
import {SharedService} from '../_services/shared.service';
import {DialogModule,ConfirmationService} from 'primeng/primeng';

@Component({
moduleId:module.id,
selector:'app-addcust',
templateUrl:'addcustomers.component.html',
styleUrls:['customers.component.css'],
//inputs:['selectedCust']
//entryComponents:[LeftmenuComponent]

})
export class AddCustomersComponent implements OnInit
{
   public myForm: FormGroup;
   public submitted:boolean;
   public events:any[]=[];
   public posts: any[];
   public cols:any[];
   errorMessage:string;
   items: MenuItem[];
  // selectedCust: Customers;
   @Input() currentCust:Customers;
   data:Customers;
   msgs: Message[];
   private lefttitle:any[];
   display: boolean = false;
   @Input() modaltext:string;

    

   constructor(private _fb:FormBuilder,private customerService:CustomersService,private confirmationService:ConfirmationService){
       
        this.customerService.changeEmitted$.subscribe(
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
     this.currentCust=this.customerService.pdata;

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
          this.customerService.deleteCustomers(this.currentCust)
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
    }


    
   save(model:Customers,isValid:boolean){
         this.submitted=true;
         
         if(!this.currentCust)
         {
                if(this.myForm.get("code").value)
                {
                    
                     this.customerService.addCustomers(model)
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
             
               this.customerService.updateCustomers(model)
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
        this.customerService.emitChange(this.currentCust);
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
        this.customerService.genCode()
            .subscribe(
                res=>{
                    console.log(res);
                   // this.currentCust.code=res;
                }
            );
    }

}