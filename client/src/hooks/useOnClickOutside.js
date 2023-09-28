import { useEffect, useRef } from 'react';
export const useOnClickOutside = (isOpen, ref, onClickAway) => {
    const savedCallback = useRef(onClickAway);
    useEffect(() => {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    useEffect(() => {
        const handler = (event) => {
            const { current } = ref;
            current && isOpen && !current.contains(event.target) && savedCallback.current(event);
        };
        document.addEventListener('click', handler);
        document.addEventListener('touchstart', handler);
        return () => {
            document.removeEventListener('click', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [isOpen, ref]);
};
