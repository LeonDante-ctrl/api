import { Component } from '@angular/core';
import{Quote}from'./quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
}
quotes=[
   new Quote(1, 'EAT YOUR FRUITS'),
   new Quote(2, 'I dont know about you , but im dealt with.'),
   new Quote(3, 'follow through wit your plans'),
 ]
}
