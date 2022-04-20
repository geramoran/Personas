import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  add(newName: HTMLInputElement, newFile: HTMLInputElement) {
    if(newFile.files != null) {
      // const readFile = new FileReader();
      let archivo = newFile.files[0];
      // console.log(newFile.files[0]);
      // readFile.onload = (function(fileUp) {
      //   return function(e) {
      //     if(e.target != null) {
      //       const file = e.target.result;
      //       console.log(file);
      //     }
      //   };
      // })(archivo);
      // if(newFile.files != null) {
      //   console.log(newName.value);
      // }
      // readFile.readAsBinaryString(archivo);

      this.taskService.insert(newName.value, archivo.name);
      newName.value = '';
      newFile.value = '';
    }
    return false;
  }
}
