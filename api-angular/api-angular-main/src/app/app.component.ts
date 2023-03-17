import { Component } from '@angular/core';
import { RestService } from './services/rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public lista:any = [];

  constructor(private RestService:RestService){
    this.RestService.get('https://jsonplaceholder.typicode.com/todos')
    .subscribe(respuesta =>{
       this.lista = respuesta
    })

  }

}

