import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor( public contactservice: ContactsService) { }

  ngOnInit() {
  }
onSaveContact(FormData)
{
  this.contactservice.saveContact(FormData)
    .subscribe(data =>{

      console.log("yessss");
    },err=>{
      console.log(err);

      console.log("hiiiiiiii");
    })
}
}
