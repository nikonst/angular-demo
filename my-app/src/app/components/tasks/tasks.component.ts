import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {
  tasks: Task[] = []

  constructor(private TaskService: TaskService) {
   this.TaskService.getTasks().subscribe((tasks) => {
    this.tasks = tasks
   })
  }

  deleteTask(task: Task) {
    this.TaskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
     })
  }
  
  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.TaskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    this.TaskService.addTask(task).subscribe((task) => {
      this.tasks.push(task)
     })
    }
}
  

