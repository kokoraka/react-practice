import * as React from "react";

type AlertProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info",
  dismisable?: boolean
}

export default function Alert(props: AlertProps): React.ReactNode {
  const { variant = "primary", dismisable = false } = props

  return (
    <div className={`alert alert-${variant} ${dismisable ? "alert-dismissible" : ""} fade show`} role="alert">
      {props.children}
      {
        dismisable ?
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        : null
      }
    </div>
  )

}
