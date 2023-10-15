import * as React from "react";

type CardProps = {
  children: {
    header?: React.ReactNode,
    body: React.ReactNode
    footer?: React.ReactNode
  },
  className?: string
}

export default function Card(props: CardProps): React.ReactNode {

  return (
    <div className={"card " + props.className}>
      { 
        props.children.header ?
          <div className="card-header">
            { props.children.header }
          </div>
        : null
      }

      {
        props.children.body ?
          <div className="card-body">
            { props.children.body }
          </div>
        : null
      }

      { 
        props.children.footer ?
          <div className="card-footer">
            { props.children.footer }
          </div>
        : null
      }
    </div>
  )

}
