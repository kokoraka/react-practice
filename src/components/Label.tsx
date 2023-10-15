import * as React from "react";

type LabelProps = {
  children: React.ReactNode
  for: string,
  required?: boolean
}

export default function Label(props: LabelProps): React.ReactNode {

  return (
    <label htmlFor={props.for} className="form-label fw-bold">
      {
        props.required ?
        <span className="text-danger">* </span>
        : null
      }

      {props.children}
    </label>
  )

}
