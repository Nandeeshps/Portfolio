import { Component, OnInit,HostListener } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { NgProgress } from 'ngx-progressbar';

declare var $: any;

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgIconComponent,

  ],
  viewProviders: [provideIcons({  heroUsers })],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent  {

  
}
