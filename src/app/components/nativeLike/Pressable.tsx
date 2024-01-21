import React, { forwardRef } from 'react'

type Props = {
  className?: string
  onClick?: React.MouseEventHandler<HTMLElement> | undefined
  onPress?: React.MouseEventHandler<HTMLButtonElement>
  type?: "button" | "submit" | "reset" |string | undefined
  disabled?: boolean
  htmlTag?: string
  children?: any
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type Props2 = {
  myRef?: React.ForwardedRef<unknown>,
}
type CombinedProps = Props & Props2;

const Pressable = ({ myRef, onPress, htmlTag = "button", type = "button", ...props }: CombinedProps): React.ReactElement => {
  return (
    React.createElement(htmlTag, { ref: myRef, onClick: onPress, type: (htmlTag === "button" ? type : undefined), ...props })
  )
}

export default React.memo(forwardRef((props: Props, ref) => {
  return <Pressable myRef={ref} {...props} />
}))