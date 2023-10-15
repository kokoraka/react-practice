import * as React from "react"
import Button from "./Button"
import Modal from "./Modal"

type ModalConfirmProps = {
  children: {
    body: React.ReactNode,
  },
  open?: boolean,
  cancelLabel?: string,
  confirmLabel?: string,
  onCancel?: () => void,
  onConfirm?: () => void,
}

export default function ModalConfirm (props: ModalConfirmProps): React.ReactNode {
  const { open = false, cancelLabel = "Batalkan", confirmLabel = "Lanjutkan" } = props

  const handleCancel = () => {
    props.onCancel && props.onCancel()
  }

  const handleConfirm = () => {
    props.onConfirm && props.onConfirm()
  }

  return (
    <Modal open={open}>
      {{
        body: props.children.body,
        footer: (
          <div className="row row-cols-12">
            <div className="col-6">
              <div className="d-grid">
                <Button variant="danger" onClick={handleCancel}>
                  {cancelLabel}
                </Button>
              </div>
            </div>
            <div className="col-6">
              <div className="d-grid">
                <Button variant="primary" onClick={handleConfirm}>
                  {confirmLabel}
                </Button>
              </div>
            </div>
          </div>
        )
      }}
    </Modal>
  )
}
