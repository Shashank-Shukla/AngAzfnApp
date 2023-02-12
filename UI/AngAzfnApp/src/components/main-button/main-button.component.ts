import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent implements OnInit {

  url: string = "";
  message: Observable<string> | undefined

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.url = "http://localhost:7095/api/InitHttpTriggerFunction";
  }

  async HelloPopUp(){
    // await new Promise(f => setTimeout(f, 1000));
    this.httpClient.get(this.url, {responseType: 'text'}).subscribe((res) =>
      alert(res)
    ,
    err => alert(err.message)
    );
  }

}
