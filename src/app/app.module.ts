import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { Block2Component } from './block2/block2.component';


@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    Block2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
