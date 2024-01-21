import React, { useMemo, useState, useCallback, useRef, forwardRef } from 'react';
import { useEffect } from 'react';

export type RenderItem = (props: {
  item: any,
  index: number
}) => React.ReactElement

type Props = {
  data: any[]
  renderItem: RenderItem
  onStartReached?: () => void
  onEndReached?: () => void
  containerClass?:string
  containerClassName?: string
  mainContainerClassName?: string
  ListHeaderComponent?: React.ReactElement
  ListFooterComponent?: React.ReactElement
}
function FlatList({ myRef, data, renderItem, onStartReached, mainContainerClassName, onEndReached, containerClassName, ListHeaderComponent, ListFooterComponent }: Props & {
  myRef: React.ForwardedRef<unknown>
}) {
  const containerRef = useRef<any>(null);
  const ref = useRef<any>({})
  if (myRef) {
    if (typeof myRef === 'function') {
      myRef(ref.current)
    } else myRef.current = ref.current
  }
  ref.current.element = containerRef.current
  return (
    <div className={`infinite-scroll-list ${containerClassName}`} ref={containerRef}>
      {ListHeaderComponent}
      <div className={`${mainContainerClassName}`}>
        <Boundary key={"top"} onIntercept={onStartReached} />
        {Array.isArray(data) && data.map((item, index) => (
          <Item key={index}>
            {renderItem({ item, index })}
          </Item>
        ))}
        <Boundary key={"bottom"} onIntercept={onEndReached} />
        {ListFooterComponent}
      </div>
    </div>
  );
}

const Boundary = ({ onIntercept }:any) => {
  const ref = useRef<any>();
  const currentTarget = ref.current;
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0
    }
  }, [])
  const callback = (entries: any) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      onIntercept && onIntercept()
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (currentTarget) observer.observe(currentTarget)
    return () => {
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [ref.current, options])

  return (
    <div ref={ref} className={`Boundary`}>
    </div>
  )

}

const Item = ({ children, onIntercept }: {
  onIntercept?: () => void
  children?:React.ReactElement
}) => {
  const ref = useRef<any>();
  const currentTarget = ref.current;
  const childRef = useRef<any>();
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '500% 0px 500%',
      threshold: 0
    }
  }, [])

  const callback = (entries:any) => {
    const [entry] = entries
    if (!entry.isIntersecting && !childRef.current?.classList.contains("hidden")) {
      var height = currentTarget.clientHeight;
      currentTarget.style.minHeight = height + "px";
      childRef.current?.classList.add("hidden")
    }
    else {
      entry.isIntersecting && childRef.current.classList.remove("hidden")
    }

  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (currentTarget) observer.observe(currentTarget)
    return () => {
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [ref.current, options])

  return (
    <div ref={ref} className={`infinite-scroll-item`}>
      <div ref={childRef} className={`w-full`}>
        {children}
      </div>
    </div>
  )

}

export default forwardRef((props: Props, ref) => {
  return <FlatList myRef={ref} {...props} />
})
