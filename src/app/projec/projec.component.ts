import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projec',
  templateUrl: './projec.component.html',
  styleUrls: ['./projec.component.css']
})
export class ProjecComponent implements OnInit {
  project1:string= 'assets/images/project1.png'
  project2:string= 'assets/images/project2.jpg'
  project3:string= 'assets/images/project3.png'

  constructor() { }

  ngOnInit(): void {
  }

}
