import { Component, OnInit } from '@angular/core';
import { Expenses } from 'src/app/Expenses';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {

  localItem : string | null;
  expenses!: Expenses[];

  constructor() {
    this.localItem = localStorage.getItem("expenses");
    if(this.localItem == null){
      this.expenses =[]
    }
    else{
      this.expenses = JSON.parse(this.localItem)
    }
    
   }

  ngOnInit(): void {
  }
  
  deleteExpense(Expense:Expenses){
    console.log(Expense)
    const index = this.expenses.indexOf(Expense)
    this.expenses.splice(index, 1)
    localStorage.setItem("expenses",JSON.stringify(this.expenses))
  }
  addExpense(Expense:Expenses){
    console.log(Expense)
    this.expenses.push(Expense)
    localStorage.setItem("expenses",JSON.stringify(this.expenses))
  }
}
