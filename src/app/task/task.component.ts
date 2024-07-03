import { Component } from '@angular/core';
import { data } from '../db-data';
import { Course } from '../types';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  data:Course[] = data;
}
