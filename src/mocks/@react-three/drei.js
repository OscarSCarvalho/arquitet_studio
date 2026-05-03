import React from 'react';

export const OrbitControls = ({ ...props }) => <div data-testid="orbit-controls" {...props} />;
export const PerspectiveCamera = ({ ...props }) => <div data-testid="perspective-camera" {...props} />;
export const Environment = ({ ...props }) => <div data-testid="environment" {...props} />;

// Export any other commonly used components
export const Sky = ({ ...props }) => <div data-testid="sky" {...props} />;
export const Html = ({ ...props }) => <div data-testid="html" {...props} />;
