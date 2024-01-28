import { JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get',
  standalone: true,
  imports: [HttpClientModule, JsonPipe],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent {

  constructor(private http: HttpClient) { }

  getJsonValue: any;
  postJsonValue: any;

  ngOnInit() {
    this.getMethod();
  }

  post() {
    this.postMethod();
  }
  getMethod() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data => {
      console.log(data);
      this.getJsonValue = data;
    });
  }

  postMethod() {
    const header = new HttpHeaders({
      contentType: 'application/json'
    });
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    }, { headers: header }).subscribe(data => {
      console.log(data);
      this.postJsonValue = data;
    });
  }
}
