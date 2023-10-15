import * as React from "react";

type ButtonProps = {
  children: React.ReactNode
  type?: "submit" | "reset" | "button" | undefined
  variant?: "primary" | "secondary" | "success" | "warning" | "danger"
  theme?: "solid" | "outline"
  size?: "lg" | "sm",
  onClick?: () => void
}

export default function Button(props: ButtonProps): React.ReactNode {
  const { type = "button", variant = "primary" } = props

  const handleClick = () => {
    props.onClick && props.onClick()
  }

  return (
    <button type={type} className={
        "btn " +
        (props.theme === "outline" ? "btn-outline-" + variant : "btn-" + variant) + " " +
        (props.size ? ("btn-" + props.size) : "")
      } onClick={handleClick}>
      { props.children }
    </button>
  )

}
