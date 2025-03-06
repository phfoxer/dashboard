import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[layout-footer]'
})
export class LayoutFootDirective { 
   
    constructor(public templateRef: TemplateRef<HTMLElement>) {}
}