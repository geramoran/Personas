import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.personas = this.taskService.getPersonas();
  }

}
