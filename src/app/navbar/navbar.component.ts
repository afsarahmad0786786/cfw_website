import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  checked: boolean = false;

  constructor(private elementRef: ElementRef) { }


  changeMode() {
    const color = this.checked ? '#1a1a1a' : '#FFFFFF'
    this.changeColor(color)

  }

  changeColor(color: string) {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = color;

  }

}
