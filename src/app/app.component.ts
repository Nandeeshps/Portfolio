import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainComponent } from './Components/main/main.component';
import { SkillsComponent } from './Components/skills/skills.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,SkillsComponent, RouterOutlet,NavbarComponent,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nandeesh Portfolio';
}
