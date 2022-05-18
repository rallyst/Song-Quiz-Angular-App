import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() name = 'start quiz';
  @Input() routenav!: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClick(route: string) {
    this.router.navigateByUrl(this.routenav);
    console.log(route)
  }
}
