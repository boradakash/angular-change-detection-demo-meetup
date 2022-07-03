import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  test1:number=0;
  ngOnInit() {
    setInterval(() => {
      this.test1 = this.test1;
    }, 1000);
  }
  render() {
    console.log('App Component');
  }
}
