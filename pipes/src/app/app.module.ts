import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterpipePipe } from './pipes/filterpipe.pipe';
import { AgeinYearPipe } from './pipes/agein-year.pipe';
import { SqrtPipe } from './pipes/sqrt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterpipePipe,
    AgeinYearPipe,
    SqrtPipe
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
