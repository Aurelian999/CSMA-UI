import React, { ReactNode } from 'react';
import { useSpring, animated } from 'react-spring';

export function FadeIn(props: {children: ReactNode}): JSX.Element {
  const { children } = props;
  const c1Style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 2500,
    },
  });

  return (
    <animated.div style={c1Style}>
      {children}
    </animated.div>
  );
}
