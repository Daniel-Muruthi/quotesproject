import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { DataformComponent } from './dataform/dataform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteformComponent,
    DataformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
