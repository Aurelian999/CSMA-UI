import { observer } from 'mobx-react';
import React from 'react';
import { useStores } from '../stores/useStores';

export const ALERT_TYPE = {
  Success: 'success',
  Info: 'info',
  Warning: 'warning',
  Danger: 'danger',
};

export interface AlertProps {
  id: string;
  type: string;
  text: string;
  dismissible: boolean;
  autoClose: boolean;
}

function Alert(): JSX.Element {
  const { alertStore } = useStores();

  function getCssClass(type: string, isDismissible: boolean) {
    return `alert alert-${type} ${isDismissible ? 'alert-dismissible' : ''}`;
  }

  return (
    <div className="container">
      <div className="m-3">
        {alertStore.alerts.map((alert) => (
          <div
            key={alert.id}
            className={getCssClass(alert.type, alert.dismissible)}
          >
            <button
              type="button"
              className="link-button close"
              onClick={() => alertStore.removeAlert(alert.id)}
            >
              &times;
            </button>
            <span>{alert.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default observer(Alert);
