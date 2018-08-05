import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundImage]'
})
export class BackgroundImageDirective implements OnChanges {
  @Input('appBackgroundImage') bgImageUrl: string;

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundImage = `url(${this.bgImageUrl})`;
    this.el.nativeElement.style.backgroundSize = 'cover';
    this.el.nativeElement.style.backgroundPosition = 'center';
  }

}
