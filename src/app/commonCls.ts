import {ElementRef,HostBinding,HostListener,Renderer } from '@angular/core';
export class commonCls {

    constructor(private el:ElementRef,private ren:Renderer){
      this.el.nativeElement.style.color='black'; // type 1
      this.ren.setElementStyle(this.el.nativeElement,'border','1px solid') // type 2
    }
    // type 3
    @HostBinding('style.padding') pad : any; 
    @HostBinding('style.background') bgColor :any;
    @HostBinding('attr.id') id:any;

    @HostListener('mouseover') myfun(){
        this.pad = '10px 10px';
        this.bgColor = 'yellow';
        this.id='compID';
    }

    @HostListener('mouseleave') reset(){
      this.pad ='0px 0px';
       this.bgColor = '';
        this.id='';
    }
}