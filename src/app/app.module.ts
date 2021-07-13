import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, MatButtonModule, MatTableModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService],
})
export class AppModule { }
