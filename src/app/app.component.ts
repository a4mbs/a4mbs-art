import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { filter, map, mergeMap } from 'rxjs/operators';
import { UpdateTitleService } from './services/update-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private titleService: UpdateTitleService) {}

  ngOnInit(): void {
    initFlowbite();
    this.titleService.init();
  }
}