import React from 'react' 
import View from './nativeLike/View'

type Props = {
  children?: any
  preClassName?: string
  className?: string
}

function Container({ children, preClassName, className, ...props }: Props) {
  return (
    <View className={`pre-container ${preClassName ?? ''}`}>
      <View {...props} className={`my-container ${className ?? ''}`}>
        {children}
      </View>
    </View>
  )
}

export default Container