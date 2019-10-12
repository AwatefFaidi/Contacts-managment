import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './about/about.component';
import {ContactsService} from "../services/contacts.service";
import {FormsModule} from "@angular/forms";
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const appRoutes : Routes = [
   {path: 'about', component: AboutComponent},
    {path: 'contacts' , component: ContactsComponent },
  {path: 'editcontact/:id' , component: EditContactComponent },
  {path: 'newcontact' , component: NewContactComponent},
    {path:'', redirectTo: '/about' ,pathMatch: 'full'}

];


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule

  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
