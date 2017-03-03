import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {User} from './users.interfaces';
import {UsersService} from '../_services/users.service';



@Component({
moduleId:module.id,
selector:'app-users',
templateUrl:'users.component.html',
styleUrls:['users.component.css']
})
export class UsersComponent implements OnInit
{
   public myForm: FormGroup;
   public submitted:boolean;
   public events:any[]=[];
   posts: any =[];
   constructor(private _fb:FormBuilder,private postsService:UsersService){}//private postsService:UsersService,private _fb:FormBuilder){}
   ngOnInit(){
    //   this.posts=[{'userid':'01','username':'jack'}];
    // console.log(this.postsService.getAllUsers());
    //   this.postsService.getAllUsers().subscribe(posts => {
    //         this.posts = posts;
    //   });
    this.myForm = this._fb.group({
            code: [''],
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            address: this._fb.group({
                street: ['', <any>Validators.required],
                postcode: ['']
            })
        });
    this.subcribeToFormChanges();
    (<FormControl>this.myForm.controls['name'])
            .setValue('John', { onlySelf: true });
   }

   subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;
        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

   save(model:User,isValid:boolean){
     this.submitted=true;
     this.postsService.addUsers(model).subscribe(posts => {
            this.posts = posts;
      });
     //console.log(model,isValid);
   }
}