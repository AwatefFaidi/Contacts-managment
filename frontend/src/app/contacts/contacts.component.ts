import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
//import { map } from 'rxjs/operators/map';
import 'rxjs/add/operator/map';
import {any} from "codelyzer/util/function";
import {ContactsService} from "../../services/contacts.service";
import {Router} from "@angular/router";
import {Contact} from "../../model/model.contact";
//import {any} from "codelyzer/util/function";
@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts: any;
motCle:string="";
  currentPage:number=0;
size:number=5;
pages:Array<number>;
  //pages:any;
  constructor(public http: HttpClient, public contactservice: ContactsService,
              public router:Router) {


  }

  ngOnInit() {

  }
  goTopage(i: number) {
    this.currentPage=i;
    this.doSearch();


  }
  doSearch(){
    this.contactservice.getContact(this.motCle,this.currentPage,this.size)
      .subscribe((data:any)=> {
        this.pageContacts = data;
        this.pages=new Array(data.totalPages);

      }, err => {
        console.log(err);
      });
  }
  onEditContact(id:number) {
this.router.navigate(['editcontact',id]);
  }
  onDeleteContact(c:Contact){
    let confirm=window.confirm('Etes vous sure ?');
    if(confirm==true){
      this.contactservice.deleteContact(c.id)
        .subscribe(data=>{
          console.log("suppression effectue");
          this.pageContacts.content.splice(this.pageContacts.content.indexOf(c),1);
        },err=>{
          console.log(err);
        })
    }

  }
chercher(){
  this.doSearch();
}
}
