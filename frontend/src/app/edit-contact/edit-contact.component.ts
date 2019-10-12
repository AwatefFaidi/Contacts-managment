import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
mode:number=1;
contact:Contact;
idContact:number;
  constructor(public activateRoute:ActivatedRoute,
              public contactsService:ContactsService,
              public router:Router) {
   this.idContact=activateRoute.snapshot.params['id'];

  }

  ngOnInit()
  {
    this.contactsService.getContact1(this.idContact)
      .subscribe((data:any)=> {
        this.contact = data;
      },err=>{console.log(err);

  })
      }

updateContact(){
    this.contactsService.updateContact(this.contact)
      .subscribe(data=>{
        console.log(data);
        this.router.navigate(['contacts']);
        alert("mise a jour effectuee");
      },err=>{
        console.log(err);
        alert("probleme");
      })
}
}
