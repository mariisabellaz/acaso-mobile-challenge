import { useEffect, useState } from 'react';

export function useActiveScreen() {
  const [screenStartTime, setScreenStartTime] = useState<number | null>(null);
  const [screenDuration, setScreenDuration] = useState<number>(0);

  useEffect(() => {
    setScreenStartTime(Date.now());

    return () => {
      if (screenStartTime) {
        const endTime = Date.now();
        const duration = endTime - screenStartTime;
        setScreenDuration(duration);
      }
    };
  }, []);

  return screenDuration;
}
