import React, { useState, useEffect } from 'react';

const UnblurAnimation = ({ children, start, delay }) => {
    const [unblur, setUnblur] = useState(false);
    const [transparent, setTransparent] = useState(true);

    useEffect(() => {
        const timeSinceLoad = performance.now();
        const initialDelay = Math.max(start - timeSinceLoad, 0);

        const timeout = setTimeout(() => {
            setUnblur(true);
            setTransparent(false);
        }, initialDelay > 0 ? initialDelay : delay);

        return () => clearTimeout(timeout);
    }, [delay, start]);

    return (
        <div className={`transition-all duration-500 ${unblur ? 'blur-none' : 'blur-3xl'} ${transparent ? 'opacity-0' : 'opacity-100'}`}>
            {children}
        </div>
    );
};

export default UnblurAnimation;