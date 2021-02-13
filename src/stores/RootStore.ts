import { AlertStore } from './AlertStore';
import { UserStore } from './UserStore';

export default class RootStore {
  userStore: UserStore;

  alertStore: AlertStore;

  constructor() {
    this.userStore = new UserStore();
    this.alertStore = new AlertStore();
  }
}
