import { useEffect, useState } from 'react';

export const useGetWidth = (blockRef: React.RefObject<HTMLDivElement>) => {
  const [width, setWitdth] = useState(0);

  const resizeHandler = () => {
    if (!blockRef.current) return;
    const width = blockRef.current.getBoundingClientRect().width;
    setWitdth(width);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return width;
};
