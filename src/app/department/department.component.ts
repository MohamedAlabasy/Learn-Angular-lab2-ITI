import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  isHidden:boolean=true
  constructor() { }

  newDepartment=new Department(0,'','');
  departmentList:Department[]=[
    new Department(1,'OS','Cairo'),
    new Department(2,'IOT','Alx'),
    new Department(3,'DP','Demits'),
  ]
  showData(id:number){
    this.isHidden=false
    if (!this.isHidden) {
    for (let index = 0; index < this.departmentList.length; index++) {
      if(this.departmentList[index].id==id){
         this.newDepartment=this.departmentList[index];
         break;
      }
    }
    }
  }
  updateDept(_name:string,_location:string){
    this.isHidden=true
    this.newDepartment.name=_name
    this.newDepartment.location=_location
  }
  deleteDept(id:number){
    this.departmentList.splice((id-1),1)
  }

  ngOnInit(): void {
  }

}
