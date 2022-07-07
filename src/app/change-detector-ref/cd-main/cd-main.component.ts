import { ApplicationRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-main',
  templateUrl: './cd-main.component.html',
  styleUrls: ['./cd-main.component.css']
})
export class CdMainComponent implements OnInit {

  constructor(public app: ApplicationRef) {
    
  }
  ngOnInit(): void {
  }

}
