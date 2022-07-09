import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnInit,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { hightlightDiv } from 'src/app/highlight';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-demo-example1',
  templateUrl: './demo-example1.component.html',
  styleUrls: ['./demo-example1.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoExample1Component implements OnInit {
  title: String = 'Angular Change Detection Demo';
  private unsubscribe$ = new Subject<void>();

  // isLoading:boolean=false;
  // isLoading$:Observable<boolean>;
  constructor(
    private el: ElementRef,
    private zone: NgZone,
    private userService: UserService
  ) {
    //this.isLoading$= this.userService.isLoading$;
  }
  counter = 0;
  ngOnInit(): void {
    // this.userService.isLoading$.subscribe(loading=>this.isLoading=loading);
    // setInterval(() => {
    //   this.counter = this.counter + 1;
    // }, 1000);
  }
  changeTitle() {
    this.title = 'Title Changed';
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  render() {
    hightlightDiv(this.el, this.zone);
    console.log('Render');
  }
}
