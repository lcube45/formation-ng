import { Directive, Input, HostBinding, OnChanges, ElementRef, Renderer2 } from '@angular/core';
import { TypePrestation } from '../enums/type-prestation.enum';

@Directive({
  selector: '[appTypeColor]'
})

export class TypeColorDirective implements OnChanges {

  @Input() appTypeColor: TypePrestation;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnChanges(): void {
    this.renderer.addClass(this.elRef.nativeElement, this.formatClass(this.appTypeColor));
  }

  private formatClass(type: TypePrestation) {
    console.log(type);
    return `type-${type.toLowerCase()}`;
  }
}
