import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 'hello1',
      name : 'Kim',
      email: 'kim@gmail.com',
      salary : 10000 ,
      department : 'IT'
    },
    {
      id: 'hello2',
      name : 'Kim2',
      email: 'kim2@gmail.com',
      salary : 20000 ,
      department : 'IT'
    },
    {
      id: 'hello3',
      name : 'Kim3',
      email: 'kim3@gmail.com',
      salary : 30000 ,
      department : 'IS'
    },
  ];
  constructor(){}
  ngOnInit(): void {
    

  }
}
