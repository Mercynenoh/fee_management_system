import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
     trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('500ms ease-out')),
      transition('default => rotated', animate('600ms ease-in'))
    ])
]
})

export class ErrorComponent implements OnInit {
load=false
  constructor() { }

  ngOnInit(): void {
  }
  state: string = 'default';
  rotate() {
      this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  @HostListener('window:load')
  onLoad() {
  this.rotate()
  }
}
