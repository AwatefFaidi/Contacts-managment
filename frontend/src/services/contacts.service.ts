import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Contact} from "../model/model.contact";

@Injectable()
export class ContactsService{
constructor(public http:HttpClient){

}
getContact(motCle:string, page:number,size:number){
  return  this.http.get("http://localhost:8080/cherchercontacts?mc="+motCle+"&page="+page+"&size="+size)
    .map((res:Response) => res);


}
  getContact1(id:number){
    return  this.http.get("http://localhost:8080/contacts/"+id)
      .map((res:Response) => res);


  }
  saveContact(contact:Contact){
    return  this.http.post("http://localhost:8080/contacts",contact)
      .map((res:Response) => res);


  }
  updateContact(contact:Contact){
    return  this.http.put("http://localhost:8080/contacts/"+contact.id,contact)
      .map((res:Response) => res);
  }
  deleteContact(id:number){
    return  this.http.delete("http://localhost:8080/contacts/"+id)
      .map((res:Response) => res);

  }
}
