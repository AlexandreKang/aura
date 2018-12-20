import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule, MatTableModule, MatInputModule, MatToolbarModule, MatButtonModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DatabaseComponent } from './database/database.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
//import { ProgressSpinnerConfigurableExampleComponent } from './progress-spinner-configurable-example/progress-spinner-configurable-example.component';
@NgModule({
  declarations: [
    AppComponent,
    DatabaseComponent,
    NavComponent,
    HomeComponent,
    //ProgressSpinnerConfigurableExampleComponent
  ],

  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    MatToolbarModule, 
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
