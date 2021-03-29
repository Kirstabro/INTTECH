import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCurrencyModule } from 'ngx-currency';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabaseService } from './services/in-memory-database.service';
import { InputComponent } from './components/input/input.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { OutputComponent } from './components/output/output.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    UsersComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    NgxCurrencyModule,
    AppRoutingModule,
    FormsModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDatabaseService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
