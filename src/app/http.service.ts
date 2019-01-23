import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = "http://192.168.0.33:8000/api"
  constructor(private http: HttpClient) { }
  postService(url, body){
    return this.http.post(this.baseUrl+url, body);
}}
//A promise is a placeholder for a future value.
//service: api work as a service so It allows users to explore functionality of Web Services
//post: add a data into
//HttpClient:is Angular's mechanism for communicating with a remote server over HTTP.
//remote server:A server that is dedicated to handling users that are not on a LAN but need remote access to it.  