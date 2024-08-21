import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  constructor(private service:StudentService){}
  data_stored:any=[]
  data:any=[]=[]

  ngOnInit(): void {
    this.service.getlist().subscribe((res)=>{
      // console.log("response", res)
      this.data_stored = res
      this.assignData()

      // console.log("data",this.data_stored)
    })
  }
  assignData(){
    this.data = this.data_stored.data
    console.log("final data", this.data)

  }
  removedetails(id:any){
    this.service.removedetails(id).subscribe((res)=>{
      console.log("response", res)
    })

  }
  
}
