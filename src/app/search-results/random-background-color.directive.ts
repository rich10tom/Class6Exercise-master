import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomBackgroundColor]'
})
export class RandomBackgroundColorDirective implements OnInit{

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('');
  }

  ngOnInit() {
    let length = 6;
    let chars = '0123456789ABCDEF';
    let hex = '#';
    while(length--) hex += chars[(Math.random() * 16) | 0];

    this.el.nativeElement.style.backgroundColor = hex;
  }

  private highlight(color: string) {
    let length = 6;
    let chars = '0123456789ABCDEF';
    let hex = '#';
    while(length--) hex += chars[(Math.random() * 16) | 0];

    this.el.nativeElement.style.backgroundColor = hex;
  }

}
