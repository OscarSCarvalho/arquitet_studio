import React from 'react'

// Helper to filter out framer-motion specific props
const filterProps = (props) => {
  const {
    initial, animate, exit, transition, whileHover, whileTap, whileFocus, whileDrag,
    drag, dragConstraints, dragElastic, dragMomentum,
    layout, layoutId,
    children,
    ...rest
  } = props
  return { ...rest, children }
}

export const motion = {
  div: (props) => <div {...filterProps(props)}>{props.children}</div>,
  section: (props) => <section {...filterProps(props)}>{props.children}</section>,
  article: (props) => <article {...filterProps(props)}>{props.children}</article>,
  button: (props) => <button {...filterProps(props)}>{props.children}</button>,
  span: (props) => <span {...filterProps(props)}>{props.children}</span>,
  h1: (props) => <h1 {...filterProps(props)}>{props.children}</h1>,
  h2: (props) => <h2 {...filterProps(props)}>{props.children}</h2>,
  p: (props) => <p {...filterProps(props)}>{props.children}</p>,
  img: (props) => <img {...filterProps(props)} />,
  li: (props) => <li {...filterProps(props)}>{props.children}</li>,
}

export const AnimatePresence = ({ children }) => <>{children}</>
export const useAnimation = () => ({ start: () => {}, stop: () => {} })
export const useMotionValue = () => ({})
export const useTransform = () => ({})
export const useViewportScroll = () => ({})
