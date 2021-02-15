import {
  action,
  computed,
  makeObservable,
  observable,
} from 'mobx';
import { UserData } from '../interfaces/UserData';

export class UserStore {
  user: UserData;

  jwt: string;

  constructor() {
    makeObservable(this, {
      user: observable,
      jwt: observable,
      isAuthenticated: computed,
      setUser: action,
      getUser: action,
    });

    this.user = { name: '', email: '' };
    this.jwt = '';
  }

  setUser(user: UserData): void {
    this.user = user;
  }

  getUser(): UserData {
    return this.user;
  }

  // TODO - persist the JWT - use cookies?
  setJwt(jwt: string): void {
    this.jwt = jwt;
  }

  getJwt(): string {
    return this.jwt;
  }

  get isAuthenticated(): boolean {
    return this.jwt !== '';
  }
}
