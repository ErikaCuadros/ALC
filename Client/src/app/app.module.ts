import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { StaticModule } from './static/static.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { NotfoundModule } from './notfound/notfound.module';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AppComponent,
        PagesComponent,
        AuthComponent,
        NotfoundComponent,
        ChartComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        StaticModule,
        NotfoundModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
