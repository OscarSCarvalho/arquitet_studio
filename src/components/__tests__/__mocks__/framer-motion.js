import React from 'react'

export const motion = {
  div: ({ children, ...props }) => <div {...props}>{children}</div>,
  section: ({ children, ...props }) => <section {...props}>{children}</section>,
  article: ({ children, ...props }) => <article {...props}>{children}</article>,
  button: ({ children, ...props }) => <button {...props}>{children}</button>,
  span: ({ children, ...props }) => <span {...props}>{children}</span>,
  h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
  h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  p: ({ children, ...props }) => <p {...props}>{children}</p>,
}

export const AnimatePresence = ({ children }) => <>{children}</>
