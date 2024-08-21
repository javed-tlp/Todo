import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  constructor(
    private service:StudentService
  ){}

  Name:string=""
  Email:string=""
  Age:string=""

  savedetails(){
    var inputData = {

      Name: this.Name,
      Email: this.Email,
      Age: this.Age
    }
    this.service.savedetails(inputData).subscribe((res)=>{
      console.log("ressss",res)
      alert("Data saved")
    })

  }


}
