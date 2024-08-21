import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url="http://localhost:3001/user/post"

  constructor(
    private http: HttpClient
  ) { }
  savedetails(inputData:object){
    return this.http.post(this.url,inputData)
  }
  getlist(){
    return this.http.get("http://localhost:3001/user/get")
  }
  removedetails(id:any){
    return this.http.post(`http://localhost:3001/user/delete/${id}`,{user_id:id})
  }
}
