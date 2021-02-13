import { action, makeObservable, observable } from 'mobx';
import { AlertProps } from '../components/Alert';

export class AlertStore {
    alerts: AlertProps[];

    constructor() {
        makeObservable(this, {
            alerts: observable,
            addAlert: action,
            removeAlert: action,
        });
        this.alerts = [];
    }

    addAlert(alert: AlertProps) {
        this.alerts.push(alert);
    }

    removeAlert(id: string) {
        // TODO
    }

}
