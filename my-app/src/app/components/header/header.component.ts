import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = true
  subsciption: Subscription

  constructor(private uiService: UiService){
    this.subsciption = this.uiService.onToggle().subscribe(
      value => this.showAddTask = value
    )
  }
  toggleAddTask() {
    this.uiService.toggleAddTask()
    console.log("Toggle")
  }
}
