import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    posts= [
    {
      title: 'Mon premier post',
      content: 'We need to rent a room for our party.',
      LoveIts: 1,
      CreatedAt: Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Joe made the sugar cookies; Susan decorated them.',
      LoveIts: -1,
      CreatedAt: Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Italy is my favorite country; in fact, I plan to spend two weeks there next year.',
      LoveIts: 0,
      CreatedAt: Date()
    }
  ];

}
