import React, { forwardRef } from 'react'

interface TextProps {
  htmlTag?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" ,
  myRef?:  React.ForwardedRef<unknown> |  any,
  className?: string,
  children?: any
  id?: string
  onClick?: React.MouseEventHandler<HTMLElement> | undefined
}

function Text({ myRef, htmlTag="span",  ...props }: TextProps) {
  return (
    React.createElement(htmlTag, {ref: myRef, ...props})
  )
}

export default React.memo(forwardRef((props: TextProps, ref)  => {
  return <Text myRef={ ref } {...props} />
}))