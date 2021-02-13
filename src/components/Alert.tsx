import { observer, useObserver } from 'mobx-react';
import React, { useState } from 'react';
import { useStores } from '../stores/useStores';

export const ALERT_TYPE = {
    Success: 'success',
    Info: 'info',
    Warning: 'warning',
    Danger: 'danger',
}

export interface AlertProps {
    id: string;
    type: string;
    text: string;
    dismissible: boolean;
    autoClose: boolean;
}

function Alert(): JSX.Element {
    const { alertStore } = useStores();

    return (
        <div className="container">
        <div className="m-3">
            {alertStore.alerts.map((alert) =>
                <div key={alert.id} className={`alert alert-${alert.type} ${alert.dismissible ? 'alert-dismissible' : ''}`}>
                    <a className="close" onClick={() => alertStore.removeAlert(alert.id)}>&times;</a>
                    <span>{alert.text}</span>
                </div>
            )}
        </div>
    </div>
    );
}

export default observer(Alert);
