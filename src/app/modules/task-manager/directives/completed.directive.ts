import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCompleted]'
})
export class CompletedDirective implements OnInit {

  @Input('appCompleted') complete: boolean;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    if (this.complete) {
      this.element.nativeElement.style.textDecoration = 'line-through';
    }
  }

}
