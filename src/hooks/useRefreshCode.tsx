import { useState } from 'react';

export const useRefreshCode = () => {
  const [countdown, setCountdown] = useState(120);
  const [isCounting, setIsCounting] = useState<boolean>(false);

  const startCountdown = () => {
    setIsCounting(true);
    setCountdown(120);

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(timer);
          setIsCounting(false);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  return { countdown, isCounting, startCountdown };
};
