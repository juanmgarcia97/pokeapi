import { Component, Input } from '@angular/core';

interface Item {
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-angular';
  tasks: Item[] = [];
  item: Item = { name: '', done: false };

  addItem(task: string) {
    this.tasks.unshift({
      name: task,
      done: false
    });
  }
}
