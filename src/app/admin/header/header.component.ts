import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/inicio']);
    localStorage.removeItem('admin');
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else {
      styleClass  = 'head-md-screen';
    }
    return styleClass;
  }
}



