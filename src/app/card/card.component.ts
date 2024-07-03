import { Component, Input } from '@angular/core';
import { Course } from '../types';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  task: Course | undefined;

}
