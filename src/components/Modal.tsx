import * as React from "react"
import * as ReactDOM from "react-dom"

type ModalProps = {
  children: {
    header?: React.ReactNode,
    body: React.ReactNode,
    footer?: React.ReactNode,
  },
  open?: boolean
  closeable?: boolean,
  onClosed?: () => void
}

export default function Modal(props: ModalProps): React.ReactNode {
  const { closeable = true } = props
  const [open, setOpen] = React.useState(props.open)

  React.useEffect(() => {
    setOpen(props.open)
  }, [props.open])

  const handleClose = () => {
    setOpen(false)
    props.onClosed && props.onClosed()
  }

  return (
    <>
      {
        ReactDOM.createPortal(
          <div className={"modal fade " + (open ? "d-inline show" : "d-none")} tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                {
                  props.children.header ?
                    <div className="modal-header">
                      {props.children.header}
                      {
                        closeable ?
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                        : null
                      }
                    </div>
                  : null
                }
  
                {
                  props.children.body ?
                    <div className="modal-body">
                      {props.children.body}
                    </div>
                  : null
                }
  
                {
                  props.children.footer ?
                    <div className="modal-footer">
                      {props.children.footer}
                    </div>
                  : null
                }
  
              </div>
            </div>
          </div>
          ,
          document.getElementById('overlay-root')
        )
      }
    </>
  )
}
