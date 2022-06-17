import { Component } from "@angular/core";

type Task = {
    name: string;
    done: boolean
}

@Component({
    selector: 'app-to-to-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
    newTask: string = '';
    tasksList: Task[] = [];

    createTask() {
        this.tasksList.unshift({
            name: this.newTask,
            done: false
        });
        this.newTask = '';
    }

    changeState(index: number) {
        const tarea = this.tasksList[index];
        tarea.done = !tarea.done;
    }

    deleteTask(index: number) {
        this.tasksList.splice(index, 1);
    }
}