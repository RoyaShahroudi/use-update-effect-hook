import React, { useRef, useEffect } from 'react';

const useUpdateEffect = (
  callback: React.EffectCallback,
    dependencies?: React.DependencyList | undefined
): void => {
    const firstRenderRef = useRef(false);

    useEffect(() => {
        if (firstRenderRef.current) {
          callback();
        } else {
            firstRenderRef.current = true;
        }
    }, dependencies);
};

export default useUpdateEffect;

