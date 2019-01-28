import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = "http://192.168.0.35:8000/api"
  constructor(private http: HttpClient) { }
  postService(url, body){
    return this.http.post(this.baseUrl+url, body);
}}

/*service: api work as a service so It allows users to explore functionality of  
Web Services and provide facility for deploying weeb application
//A promise is a placeholder for a future value.
//post: add a data into
//http client:=A HTTP Client is a location from where HTTP requests can be sent.
// Major HTTP client is a browser which we use
*/

