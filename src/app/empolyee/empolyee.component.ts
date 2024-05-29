import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeServiceService } from '../employe-service.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-empolyee',
  templateUrl: './empolyee.component.html',
  styleUrls: ['./empolyee.component.css']
})
export class EmpolyeeComponent {


employees:FormGroup;

constructor(private fb:FormBuilder,private empservice:EmployeServiceService,private diaref:DialogRef){
  this.employees=fb.group({
    FirstName:'',
    lastName:'',
    Dob:'',
    email:'',
    education:'',
    gender:'',
    company:'',
    currentpackage:''

  })
}

  education:string[]=[
   'School',
   'High School',
   'Graduation',
   'Post Graduation'
  ]
  onCancel() {
  if(this.employees.invalid){
    this.diaref.close(EmpolyeeComponent);
  }
  }
  submit(){
    if(this.employees.valid){
      this.empservice.getAllData(this.employees.value).subscribe({
        next:(val:any)=>{
          alert("Employee Succsefully Registerd")
          this.diaref.close(EmpolyeeComponent)
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }
  }
}
