import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RspComponent } from "./rsp/rsp.component";
import { HttpClientModule } from "@angular/common/http";
import {RspService} from "./rsp/rsp.service";

@NgModule({
  declarations: [
    AppComponent, RspComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RspService],
  bootstrap: [AppComponent, RspComponent]
})
export class AppModule { }
