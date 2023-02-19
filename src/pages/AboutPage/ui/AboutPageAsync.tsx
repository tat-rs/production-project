import React from 'react';
// @ts-ignore
export const AboutPageAsync = React.lazy(() => new Promise<void>((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
