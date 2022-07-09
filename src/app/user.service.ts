import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
interface User {
  firstName: string;
  lastName: string;
}
const ANONYMOUS_USER: User = {
  firstName: '',
  lastName: '',
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);
  private loadingsubject = new BehaviorSubject<boolean>(true);

  user$: Observable<User> = this.subject.asObservable();

  isLoading$: Observable<boolean> = this.loadingsubject.asObservable();

  loadUser(user: User) {
    this.subject.next(user);
  }
  constructor(){
    setTimeout(() => {
      this.loadingsubject.next(false);
    }, 5000);
  }
}
