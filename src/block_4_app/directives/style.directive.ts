import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';

@Directive ({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('appStyle') color = 'red';
  @Input() dStyle: {
    border?: string,
    borderRadius?: string,
    padding?: string
  };
  @HostBinding('style.padding') elPadding = null;
 constructor( private el: ElementRef, private r: Renderer2 ) {
  this.r.setStyle ( this.el.nativeElement, 'color', 'blue' );
 }
 @HostListener ('mouseenter')  onEntr() {
  this.elPadding = this.dStyle.padding;
  this.r.setStyle ( this.el.nativeElement, 'font-size', '2rem');
  this.r.setStyle ( this.el.nativeElement, 'color', 'red');
  this.r.setStyle ( this.el.nativeElement, 'border', this.dStyle.border );
  this.r.setStyle ( this.el.nativeElement, 'border-radius', this.dStyle.borderRadius );
 }
 @HostListener ('mouseleave')  onleave() {
  this.elPadding = '0px';
  this.r.setStyle ( this.el.nativeElement, 'font-size', '1.5rem');
  this.r.setStyle ( this.el.nativeElement, 'color', this.color);
  this.r.setStyle ( this.el.nativeElement, 'border', null );
  this.r.setStyle ( this.el.nativeElement, 'border-radius', null );
 }
}
