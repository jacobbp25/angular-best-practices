import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserRepositoryService {
  currentUser: any;

  constructor() {}

  saveUser(user): Observable<any> {
    user.classes = user.classes || [];
    this.currentUser = user;

    return Observable.empty().delay(1000);
  }

  enroll(classId): Observable<any> {
    // tslint:disable-next-line:curly
    if (!this.currentUser) return Observable.throw('User not signed in');

    // tslint:disable-next-line:curly
    if (this.currentUser.classes.includes[classId]) return Observable.throw('Already enrolled');

    this.currentUser.classes.push(classId);

    return Observable.empty().delay(1000);
  }

  drop(classId): Observable<any> {
    // tslint:disable-next-line:curly
    if (!this.currentUser) return Observable.throw('User not signed in');

    // tslint:disable-next-line:curly
    if (!this.currentUser.classes.includes(classId)) return Observable.throw('Not enrolled');

    this.currentUser.classes = this.currentUser.classes.filter(c => c.classId !== classId);

    return Observable.empty().delay(1000);
  }

  signIn(credentials): Observable<any> {
    // Never, ever check credentials in client-side code.
    //  his code is only here to supply a fake endpoint for signing in.
    // tslint:disable-next-line:curly
    if (credentials.email !== 'me@whitebeards.edu' || credentials.password !== 'super-secret') return Observable.throw('Invalid login');

    this.currentUser = {
      userId: 'e61aebed-dbc5-437a-b514-02b8380d8efc',
      firstName: 'Jim',
      lastName: 'Cooper',
      email: 'me@whitebeards.edu',
      classes: ['24ab7b14-f935-44c1-b91b-8598123ea54a']
    };

    return Observable.empty();
  }
}

const USERS = [
  {
    userId: 'e61aebed-dbc5-437a-b514-02b8380d8efc',
    firstName: 'Jim',
    lastName: 'Cooper',
    email: 'someones-email@gmail.com',
    password: 'supersecret',
    classes: ['24ab7b14-f935-44c1-b91b-8598123ea54a']
  }
];
