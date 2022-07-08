import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-demo2-newsletter',
  templateUrl: './demo2-newsletter.component.html',
  styleUrls: ['./demo2-newsletter.component.css'],
//  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Demo2NewsletterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input()
  user: any;

  @Output()
  subscribe = new EventEmitter();

  subscribeToNewsletter(email: string) {
    this.subscribe.emit(email);
  }
  render(){
    console.log('Render Newsletter')
  }
}
