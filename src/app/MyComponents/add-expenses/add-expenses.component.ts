import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Expenses } from 'src/app/Expenses';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {
  title!: string;
  desc!: string;
  @Output() expenseAdd:EventEmitter<Expenses> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo ={
      sno:0,
      title:this.title,
      desc:this.desc,
      active: true
    }
    this.expenseAdd.emit(todo)
  }
}
