import {Component,OnInit} from '@angular/core';


@Component({
selector:'app-dash',
templateUrl:'dashboard.component.html',
styleUrls:['dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
    constructor(){};
    ngOnInit(){};
    // users:any [];
    // contructor(private usersService:UsersService){}
    // ngOnInit(){
    //     this.usersService.getAllUsers().subscribe(users=>{
    //         this.users=users;
    //     })
    // }
}

