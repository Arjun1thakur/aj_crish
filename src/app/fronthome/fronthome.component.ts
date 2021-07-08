import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fronthome',
  templateUrl: './fronthome.component.html',
  styleUrls: ['./fronthome.component.css']
})
export class FronthomeComponent implements OnInit {
  fronthome:string='assets/images/a1.jpeg'
  constructor() { }

  ngOnInit(): void {
  }

}
