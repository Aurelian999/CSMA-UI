import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { useStores } from '../../stores/useStores';
import { ROUTES } from '../../constants';

function LogOut(): JSX.Element {
  const { userStore } = useStores();
  const history = useHistory();

  useEffect(() => {
    userStore.logout();
    setTimeout(() => {
      history.push(ROUTES.HOME);
    }, 1000);
  }, []);

  return (
    <>
      <h1>
        Veți fi deconectat imediat. La reverede!
      </h1>
    </>
  );
}

export default observer(LogOut);
