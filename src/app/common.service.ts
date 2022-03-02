import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl: any=environment.baseURL;
  baseUrl2: any=environment.baseURL2;
  baseUrl3: any=environment.baseURL3;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  list:any[];


  constructor(private http:HttpClient) {}
   
  getUser(){
    return this.http.get(this.baseUrl);
  }
  updateData(data : any,userId:any){
    return this.http.put(this.baseUrl+"/"+userId,data);
  }
  updateAdminData(data : any){
    return this.http.put(this.baseUrl3,data);
  }
  addArticle(art : any){
    return this.http.post(this.baseUrl2,art);  
  }
  getArticle(){
    return this.http.get(this.baseUrl2);
  }

  getArticleForUser(userId:any){
    return this.http.get(this.baseUrl2+"?uid="+userId);
  }
  updateArticle(data:any,id: any){
    console.log("Update Article ID : ", id)
    return this.http.put(this.baseUrl2+"/"+id,data);
  }
  deleteArticle(id: any){
    return this.http.delete(this.baseUrl2+"/"+id)
  }
  deleteUser(id: any){
    return this.http.delete(this.baseUrl+"/"+id)
  }
  deleteArticleForUser(userId:number){
    console.log("Hey, i reached here!!");
    return this.http.delete(this.baseUrl2+"?uid="+userId);
  }
  addingUser(bca : any){
    return this.http.post(this.baseUrl,bca);
  }
  deleteAccount(id: any){
    return this.http.delete(this.baseUrl+"/"+id)
  }
}
