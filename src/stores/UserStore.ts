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
      logout: action,
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
    localStorage.setItem('jwt', jwt);
    this.jwt = jwt;
  }

  getJwt(): string {
    return localStorage.getItem('jwt') || '';
    return this.jwt; // TODO clear this mess
  }

  // eslint-disable-next-line class-methods-use-this
  get isAuthenticated(): boolean {
    const storedJwt = localStorage.getItem('jwt');
    return storedJwt !== null && storedJwt !== '';
  }

  logout(): void {
    this.setUser({ name: '', email: '' });
    localStorage.clear();
  }
}
