import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [AppComponent, FirstComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Material Modules,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    // FlexLayoutModule
    FlexLayoutModule,
    NgApexchartsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
