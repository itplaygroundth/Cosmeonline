import {Component,OnInit} from '@angular/core';
//import {MenubarModule,TabMenuModule,MenuItem} from 'primeng/primeng';
import {menus} from './header.menu';

@Component({
selector:'app-header',
templateUrl:'header.component.html',
styleUrls:['header.component.css']
})
export class HeaderComponent implements OnInit
{
    isIn=false;
    toggleState(){
        let bool=this.isIn;
        this.isIn=bool===false?true:false;
    }
   
    contructor(){}
    ngOnInit(){
        
    }
}