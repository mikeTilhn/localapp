import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './calendar/calendar.component';
import { IncomestatementComponent } from './incomestatement/incomestatement.component';
import { CreateReportComponent } from './incomestatement/create-report/create-report.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { FirstQuarterComponent } from './incomestatement/first-quarter/first-quarter.component';
import { SecondQuarterComponent } from './incomestatement/second-quarter/second-quarter.component';
import { ThirdQuarterComponent } from './incomestatement/third-quarter/third-quarter.component';
import { FourthQuarterComponent } from './incomestatement/fourth-quarter/fourth-quarter.component';

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        IncomestatementComponent,
        CreateReportComponent,
        FirstQuarterComponent,
        SecondQuarterComponent,
        ThirdQuarterComponent,
        FourthQuarterComponent
    
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatRadioModule,
        MatExpansionModule,
        MatSelectModule,
        MatCardModule,

    ]
})
export class AppModule { }
