import React, { forwardRef, ForwardRefRenderFunction } from 'react'

interface ViewProps {
  htmlTag?: string,
  myRef?: React.ForwardedRef<unknown> | any,
  className?: string,
  children?: any
  id?: string
}

function View({ myRef, htmlTag = "div", ...props }: ViewProps) {
  return (
    React.createElement(htmlTag, { ref: myRef, ...props })
  )
}

export default React.memo(forwardRef((props: ViewProps, ref) => {
  return <View myRef={ref} {...props} />
}))