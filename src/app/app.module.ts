// tslint:disable-next-line:max-line-length
import { MatExpansionModule, MatIconModule, MatFormFieldModule, MatDatepickerModule, MatTabsModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';





import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccordionComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MatExpansionModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [AccordionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
