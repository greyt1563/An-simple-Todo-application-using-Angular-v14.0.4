import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Expenses } from 'src/app/Expenses';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css']
})
export class ExpenseItemComponent implements OnInit {

  @Input() Expense!: Expenses;
  @Output() expenseDelete:EventEmitter<Expenses> = new EventEmitter();
  @Output() expenseUpdate:EventEmitter<Expenses> = new EventEmitter();
  constructor() {

   }

  ngOnInit(): void {
  }

  onClick(Expense:Expenses){
    this.expenseDelete.emit(Expense)
    // console.log("Delete Button selected",Expense)
  }
  onClickUpdate(Expense:Expenses){
    this.expenseUpdate.emit(Expense)
  }

}
