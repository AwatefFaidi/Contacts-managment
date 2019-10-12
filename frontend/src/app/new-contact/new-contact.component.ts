import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  // geree le contact men class Contatc
  contact: Contact = new Contact();

mode:number=1;
  constructor(public contactservice: ContactsService) {  }

  ngOnInit() {  }

  saveContact() {
    //console.log(this.contact);
    this.contactservice.saveContact(this.contact)
      .subscribe((data:any) => {
        console.log(data);
        this.contact=data;
        this.mode=2;
      }, err => {
        console.log(err);
        console.log("hiiiiiiii");
      });
  }

}
