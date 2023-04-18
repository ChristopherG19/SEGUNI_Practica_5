import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { ClientesTableComponent } from './clientes-table/clientes-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { ToolbarModule } from 'primeng/toolbar';
import { TabMenuModule } from 'primeng/tabmenu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';
import { ClientesTableEditComponent } from './clientes-table-edit/clientes-table-edit.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { MenubarModule } from 'primeng/menubar';
import { CreateClientesComponent } from './create-clientes/create-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
    ClientesTableComponent,
    DashboardEditComponent,
    ClientesTableEditComponent,
    CreateClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    TabMenuModule,
    ToolbarModule,
    SplitButtonModule,
    FileUploadModule,
    ToastModule,
    MenubarModule,
    TabViewModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
