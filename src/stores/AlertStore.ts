import { action, makeObservable, observable } from 'mobx';
import { AlertProps } from '../components/Alert';

export class AlertStore {
  alerts: AlertProps[];

  constructor() {
    makeObservable(this, {
      alerts: observable,
      addAlert: action,
      removeAlert: action,
      clear: action,
    });
    this.alerts = [];
  }

  addAlert(alert: AlertProps): void {
    this.alerts.push(alert);
  }

  removeAlert(id: string): void {
    const remainingAlerts = this.alerts.filter((x) => x.id !== id);
    this.alerts = remainingAlerts;
  }

  clear(): void {
    this.alerts = [];
  }
}
