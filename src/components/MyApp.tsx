import React from 'react';

import { IApiWindow } from '../types/IApiWindow';

declare const { dgsApi }: IApiWindow;


const MyApp: React.FC = () => {

  async function handleClick() {
    try {

      await dgsApi.getBonusById(123);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <button onClick={() => handleClick}>
        CLICK ME
      </button>
    </div>
  );
}

export { MyApp }
