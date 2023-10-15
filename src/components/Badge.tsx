import * as React from "react";

type BadgeProps = {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger"
  children: React.ReactNode
}

export default function Badge(props: BadgeProps): React.ReactNode {
  const { variant = "primary" } = props

  return (
    <div className={"badge text-bg-" + variant}>
      { props.children }
    </div>
  )

}
