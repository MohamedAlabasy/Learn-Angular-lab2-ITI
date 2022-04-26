import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  isHidden:boolean=true
  constructor() { }

  newStudent=new Student(0,'',0,'');
  studentList:Student[]=[
    new Student(1,"mohamed",24,'OS'),
    new Student(2,"ahmed",22,'IOT'),
    new Student(3,"mona",22,'DP'),
  ]


  showDetails(id:number){
    this.isHidden=false
    if (!this.isHidden) {
      for (let index = 0; index < this.studentList.length; index++) {
        if(this.studentList[index].id==id){
           this.newStudent=this.studentList[index];
           break;
        }
      }
    }
  }
  hideDept(){
    this.isHidden=true
  }
  ngOnInit(): void {
  }

}
