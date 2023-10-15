import * as React from "react"
import Alert from "../Alert"
import Button from "../Button"
import ButtonGroup from "../ButtonGroup"
import Container from "../Container"
import CashflowEdit, { SubmitMessage } from "./CashflowEdit"
import CashflowItem, { ChangeMessage, RemoveMessage } from "./CashflowItem"
import Modal from "../Modal"
import ModalConfirm from "../ModalConfirm"
import Money from "../../values/Money"

type CashflowProps = {
  items: CashflowItemProp[]
}

type CashflowItemProp = {
  description: string
  type: "debit" | "credit"
  amount: number
  date: Date
}

export default function Cashflow(props: CashflowProps): React.ReactNode {
  const [items, setItems] = React.useState<CashflowItemProp[]>(props.items)
  const [cashflowNew, setCashflowNew] = React.useState({
    description: "",
    amount: 0,
    type: "",
    date: new Date(),
  })
  const [modalNew, setModalNew] = React.useState(false)
  const [modalDelete, setModalDelete] = React.useState({
    open: false,
    position: undefined as number | undefined,
  })

  const handleOpenModalNew = () => {
    setModalNew(true)
  }

  const handleCloseModalNew = () => {
    setModalNew(false)
  }

  const handleAddItem = (m: SubmitMessage) => {
    if (!m.description) {
      alert("Deskripsi tidak valid")
      return
    }

    if (!m.amount) {
      alert("Nominal tidak valid")
      return
    }

    if (!m.type) {
      alert("Jenis tidak valid")
      return
    }

    if (!m.date) {
      alert("Tanggal tidak valid")
      return
    }

    const newItem = {
      description: m.description,
      amount: m.amount,
      type: m.type as "debit" | "credit",
      date: m.date,
    }
    setItems((prevItems) => {
      return [
        ...prevItems,
        newItem
      ]
    })
    setCashflowNew({
      description: "",
      amount: 0,
      type: "",
      date: new Date(),
    })
    setModalNew(false)
  }

  const handleChangeItem = (m: ChangeMessage) => {
    alert('TODO: CHANGE ITEM: ' + m.position)
  }

  const handleRemoveItem = (m: RemoveMessage) => {
    setModalDelete((prevModal) => {
      return {
        ...prevModal,
        open: true,
        position: m.position,
      }
    })
  }

  const removeItem = (position: number) => {
    const updatedItems = items.filter((_, idx) => idx !== position)
    setItems(updatedItems)
  }

  const handleClearItems = () => {
    setItems([])
  }

  return (
    <>
      <Container>
        <h1>Cashflow Statement</h1>
        <div>
          { 
            items.length === 0 ?
              <Alert variant="info">
                <b>Belum ada cashflow</b>
                <p>Silahkan tambahkan data terlebih dahulu</p>
              </Alert>
            :
            items.map((cashflow, i) => {
              return (
                <CashflowItem 
                  key={`cashflow-item-${i}`}
                  position={i}
                  cashflow={{
                    description: cashflow.description,
                    type: cashflow.type,
                    amount: Money.createDefault(cashflow.amount),
                    date: cashflow.date
                  }}
                  onChange={handleChangeItem}
                  onRemove={handleRemoveItem} />
              )
            })
          }
        </div>
        <div>
          <ButtonGroup>
            <Button type="reset" variant="danger" onClick={handleClearItems}>
              Kosongkan
            </Button>
            <Button variant="success" onClick={handleOpenModalNew}>
              Tambah
            </Button>
          </ButtonGroup>
        </div>
      </Container>

      <Modal open={modalNew} onClosed={handleCloseModalNew}>
        {{
          header: (
            <h1 className="modal-title fs-5">Cashflow Info</h1>
          ),
          body: (
            <CashflowEdit 
              id="cashflow-edit" 
              submitLabel="Buat Baru"
              cashflow={cashflowNew} 
              onSubmit={handleAddItem} />
          )
        }}
      </Modal>

      <ModalConfirm 
        open={modalDelete.open} confirmLabel="Hapus"
        onCancel={() => { 
          setModalDelete((prevModal) => {
            return {
              ...prevModal,
              open: false,
            }
          }) 
        }}
        onConfirm={() => {
          removeItem(modalDelete.position)

          setModalDelete((prevModal) => {
            return {
              ...prevModal,
              open: false,
            }
          }) 
        }}>
        {{
          body: (
            <div>
              Hapus data?
            </div>
          )
        }}
      </ModalConfirm>
    </>
  )

}
