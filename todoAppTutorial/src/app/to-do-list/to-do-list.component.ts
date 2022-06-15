import { Component, OnInit } from "@angular/core";

type Task = {
    nombre: string;
    completada: boolean
}

@Component({
    selector: 'app-to-to-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
    nuevaTarea: string = '';
    listaTareas: Task[] = [];
    constructor() { }
    ngOnInit(): void {
    }

    crearTarea() {
        this.listaTareas.unshift({
            nombre: this.nuevaTarea,
            completada: false
        });
        this.nuevaTarea = '';
    }

    cambiarEstado(index: number) {
        const tarea = this.listaTareas[index];
        tarea.completada = !tarea.completada;
    }

    eliminarTarea(index: number) {
        this.listaTareas.splice(index, 1);
    }
}