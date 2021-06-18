import React, { useCallback, useState } from 'react';

import { IApiWindow } from '../types/IApiWindow';

declare const { dgsApi }: IApiWindow;


const MyApp: React.FC = () => {
  const [text, setText] = useState<string>();

  const handleClick = useCallback(async() => {
    try {
      const textFromApi = await dgsApi.showService();

      setText(textFromApi)
    } catch (error) {
      console.log(error)
    }
  }, [setText])

  return (
    <div>
      <button onClick={() => handleClick()}>
        CLICK ME
      </button>
      {text && (
        <div>
          <strong>{text}</strong>
        </div>
      )}
    </div>
  );
}

export { MyApp }
