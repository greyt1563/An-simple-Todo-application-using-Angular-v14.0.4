import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './MyComponents/expense-entry/expense-entry.component';
import { ExpenseItemComponent } from './MyComponents/expense-item/expense-item.component';
import { AddExpensesComponent } from './MyComponents/add-expenses/add-expenses.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponentComponent } from './MyComponents/about-component/about-component.component'


const routes: Routes = [
  { path: '' , component: ExpenseEntryComponent },
  { path: 'about' , component: AboutComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    ExpenseItemComponent,
    AddExpensesComponent,
    AboutComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
