//define a component for the timeline widget
import { Component, ContentChildren, HostListener, Input, QueryList, TemplateRef } from '@angular/core';
import { iResponsiveStyle } from '../../../project.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'a4mbs-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class TimelineComponent  {
  @ContentChildren('timelineElement', { read: TemplateRef }) timelineItems?: QueryList<TemplateRef<any>>;
  @Input() timelineColor!: string;
  @Input() eventsColor!: string;
  @Input() elementColor!: string;
  @Input() responsiveStyle?: iResponsiveStyle;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    //This will trigger the change detection
  }

  private getTimelineStyle(style?: string): string {   
    switch (style) {
      case 'left':
        style = 'timeline-left';
        break;
      case 'right': 
        style = 'timeline-right';
        break;
      // Due to the addition of a line in the timeline, the alternation of elements was reversed; here we reverse it again to achieve the desired effect.
      case 'left-first':
        style = 'timeline-right-first';
        break;
      //Due to the addition of a line in the timeline, the alternation of elements was reversed; here we reverse it again to achieve the desired effect.
      case 'right-first':
        style = 'timeline-left-first';
        break;
      default:
        style = 'timeline-left-first';
    }
    return style;
  }

  setResponsiveStyle(): string {      
    // if (window.innerWidth < 768) {
    //   return this.getTimelineStyle(this.responsiveStyle?.small || 'right') ;  
    // } return this.getTimelineStyle(this.responsiveStyle?.large || 'right-first') ;
    return this.getTimelineStyle(this.responsiveStyle?.small || 'right');
  }


  getTimelineColor(dots?:true): string {  
    //In order to work, TailwindCSS must 'see' the color class name in the css or ts otherwise it won't load those classes
    let color = {
      timeline: '',
      dots: ''
    };
    switch (this.timelineColor) {
      case 'light-alternative':
        color = { timeline: 'bg-slate-100', dots: 'before:bg-slate-100' };
        break;        
      case 'primary':
        color = { timeline: 'bg-primary', dots: 'before:bg-primary' };
        break;
      case 'secondary':
        color = { timeline: 'bg-secondary', dots: 'before:bg-secondary' };
        break;
      case 'success':
        color =   { timeline: 'bg-success', dots: 'before:bg-success' };
        break;
      case 'danger':
        color =  { timeline: 'bg-danger', dots: 'before:bg-danger' };
        break;
      case 'warning':
        color = { timeline: 'bg-warning', dots: 'before:bg-warning' };
        break;
      case 'info':
        color = { timeline: 'bg-info', dots: 'before:bg-info' };
        break;
      case 'light':
        color = { timeline: 'bg-light', dots: 'before:bg-light' };
        break;
      case 'dark':
        color = { timeline: 'bg-dark', dots: 'before:bg-dark' };
        break;
      default: 
        color = { timeline: 'bg-primary', dots: 'before:bg-primary' };
    }
    return dots ? color.dots : color.timeline;
  }


  getElementColor(): string {  
    //In order to work, TailwindCSS must 'see' the color class name in the css or ts otherwise it won't load those classes
    let color = '';
    switch (this.elementColor) {
      case 'light-alternative':
        color = 'bg-slate-100 after:bg-slate-100';
        break;
      case 'primary':
        color = 'bg-primary after:bg-primary';
        break;
      case 'secondary':
        color = 'bg-secondary after:bg-secondary';
        break;
      case 'success':
        color = 'bg-success after:bg-success';
        break;
      case 'danger':
        color = 'bg-danger after:bg-danger';
        break;
      case 'warning':
        color ='bg-warning after:bg-warning';
        break;
      case 'info':
        color ='bg-info after:bg-info';
        break;
      case 'light':
        color ='bg-light after:bg-light';
        break;
      case 'dark':
        color ='bg-dark after:bg-dark';
        break;
      default: 
        color ='bg-primary after:bg-primary';
    }
    return color;
  }

}