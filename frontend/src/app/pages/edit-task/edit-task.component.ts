import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  taskId: string;
  listId: string;
  priorities: any[];
  
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.taskId = params.taskId;
        this.listId = params.listId;
      }
    )

    this.priorities = [
      {id:1, name:"Low"},
      {id:2, name:"Medium"},
      {id:3, name:"High"},
    ]

  }

  updateTask(data: NgForm) {
    console.log(data.value)
    this.taskService.updateTask(this.listId, this.taskId, data.value).subscribe(() => {
      this.router.navigate(['/lists', this.listId]);
    })
  }

}
