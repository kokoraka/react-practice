import * as React from "react"

type WrapperProps = {
  children: React.ReactNode
}

export default function Wrapper(props: WrapperProps): React.ReactNode {
  return props.children
}
