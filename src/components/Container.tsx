import * as React from "react";

type ContainerProps = {
  children: React.ReactNode
}

export default function Container(props: ContainerProps): React.ReactNode {

  return (
    <div className="container">
      { props.children }
    </div>
  )

}
