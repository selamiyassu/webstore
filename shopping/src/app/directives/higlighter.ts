
import{Directive,ElementRef,HostListener} from '@angular/core';
@Directive({
    selector:'[myHighlight]'
})
export class CustomDirective{
    constructor(private el:ElementRef){
        
     //  el.nativeElement.style.backgroundColor = "red";
    }
@HostListener('mouseenter') onmouseEnter(){
this.highlight('black');
}
@HostListener('mouseleave') onmousLeave(){
    this.highlight(null);
}
private highlight(color:string){
    this.el.nativeElement.style.backgroundColor=color;
}

}