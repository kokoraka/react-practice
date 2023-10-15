import * as React from "react";

type ButtonGroupProps = {
  children: React.ReactNode,
  classNames?: string
}

export default function ButtonGroup(props: ButtonGroupProps): React.ReactNode {

  return (
    <div className={"btn-group " + props.classNames} role="group">
      { props.children }
    </div>
  )

}
