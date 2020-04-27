import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {
  @Input() set appIfnot(condition: boolean) {
    if ( condition ) {
      // pokazati
      this.vieContainer.createEmbeddedView ( this. templateRef );
    } else {
      // skrit
      this.vieContainer.clear ();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vieContainer: ViewContainerRef
  ) { }

}
