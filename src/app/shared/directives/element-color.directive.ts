import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appElementColor]'
})
export class ElementColorDirective implements OnChanges {
  @Input() isBackgroundColor = true;
  @Input() color: string;
  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;

    this.setColor(this.color);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setColor(changes.color.currentValue);
  }

  setColor(color: string): void {
    if (!color) {
      return;
    }

    if (this.isBackgroundColor) {
      this.setBackgroundColorStyle(color);
    } else {
      this.setColorStyle(color);
    }
  }

  setColorStyle(color: string): void {
    this.el.nativeElement.style.color = color;
  }

  setBackgroundColorStyle(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
