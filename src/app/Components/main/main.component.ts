import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

interface TypedOptions {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  // Add other options as needed
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeTyped();
}

private initializeTyped(): void {
  const options: TypedOptions = {
    strings: ['Fresher', 'Web Developer', 'Full-stack Developer'],
    typeSpeed: 100,
    backSpeed: 75,
    loop: true
  };

  const typed = new Typed(this.el.nativeElement.querySelector('#element'), options);
}
}
