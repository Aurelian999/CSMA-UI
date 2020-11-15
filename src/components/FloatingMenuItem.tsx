import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface FloatingMenuItemProps {
  action: any;
  label: string;
  icon: IconProp;
}

function FloatingMenuItem(props: FloatingMenuItemProps): JSX.Element {
  const label = props.label ? <label>{props.label}</label> : undefined;

  return (
    <div onClick={() => { props.action();}} className="floating-menu-item">
      {label}
      <div className="floating-menu-icon">
        <FontAwesomeIcon
          icon={props.icon}
          style={{ width: '20px', height: '20px' }}
        />
      </div>
    </div>
  );
}

export default FloatingMenuItem;
