import React from 'react';

export const Canvas = ({ children, ...props }) => <div data-testid="canvas" {...props}>{children}</div>;

// Export any other members that might be imported
export const useFrame = () => {};
export const useThree = () => ({});
