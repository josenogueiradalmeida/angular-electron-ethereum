import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    
  }

  lala() {
    console.log('oi')
    let retorno = this.http.get<Object>("http://localhost:9090/api/read")
    
    console.log(retorno)
  }
}
