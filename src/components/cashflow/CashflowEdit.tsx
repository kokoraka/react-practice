import * as React from "react"
import Button from "../Button"
import InputText, { ChangeMessage as InputTextChangeMessage } from "../InputText"
import InputNumber, { ChangeMessage as InputNumberChangeMessage } from "../InputNumber"
import InputDate, { ChangeMessage as InputDateChangeMessage } from "../InputDate"
import Label from "../Label"
import Select, { ChangeMessage as SelectChangeMessage } from "../Select"

export type SubmitMessage = {
  description?: string
  amount?: number
  type?: string
  date?: Date
}

type CashflowEditProps = {
  id: string,
  submitLabel?: string,
  onSubmit?: (m: SubmitMessage) => void,
  cashflow?: CashflowItem
}

type CashflowItem = {
  description?: string
  amount?: number
  type?: string
  date?: Date
}

export default function CashflowEdit (props: CashflowEditProps): React.ReactNode {
  const [cashflow, setCashflow] = React.useState({
    description: "",
    amount: 0,
    type: "",
    date: new Date(),
  } as CashflowItem)
  
  React.useEffect(() => {
    setCashflow(props.cashflow)
  }, [props.cashflow])

  const handleSubmit = (e: any) => {
    e.preventDefault()

    props.onSubmit && props.onSubmit({
      description: cashflow.description,
      amount: cashflow.amount,
      type: cashflow.type,
      date: cashflow.date,
    })
  }

  const handleDescriptionChange = (m: InputTextChangeMessage) => {
    setCashflow((prevCashflow: CashflowItem) => {
      return {
        ...prevCashflow,
        description: m.value,
      }
    })
  }

  const handleAmountChange = (m: InputNumberChangeMessage) => {
    setCashflow((prevCashflow: CashflowItem) => {
      return {
        ...prevCashflow,
        amount: m.value,
      }
    })
  }

  const handleTypeChange = (m: SelectChangeMessage) => {
    setCashflow((prevCashflow: CashflowItem) => {
      return {
        ...prevCashflow,
        type: m.value,
      }
    })
  }

  const handleDateChange = (m: InputDateChangeMessage) => {
    setCashflow((prevCashflow: CashflowItem) => {
      return {
        ...prevCashflow,
        date: m.value,
      }
    })
  }

  return (
    <>
      <form id={`${props.id}-form`} onSubmit={handleSubmit}>
        <div className="row row-cols-12">
          <div className="col-12">
            <Label for={`${props.id}-description`} required>
              Keterangan
            </Label>
            <InputText onChange={handleDescriptionChange}
              id={`${props.id}-description`}
              value={cashflow.description} 
              name="description" 
              placeholder="Keterangan"
              minLength={3}
              maxLength={254}
              required />
          </div>
        </div>
        <div className="row row-cols-12 my-2">
          <div className="col-12">
            <Label for={`${props.id}-amount`} required>
              Nominal
            </Label>
            <InputNumber onChange={handleAmountChange}
              id={`${props.id}-amount`}
              value={cashflow.amount}  
              name="amount"
              min={0}
              placeholder="Nominal"
              required />
          </div>
        </div>
        <div className="row row-cols-12 my-2">
          <div className="col-12">
            <Label for={`${props.id}-type`} required>
              Jenis
            </Label>
            <Select onChange={handleTypeChange}
              items={[
                { value: "debit", label: "Debit" },
                { value: "credit", label: "Kredit" },
              ]}
              id={`${props.id}-type`}
              value={cashflow.type}  
              name="type"
              placeholder="Jenis"
              required />
          </div>
        </div>
        <div className="row row-cols-12 my-2">
          <div className="col-12">
            <Label for={`${props.id}-date`} required>
              Tanggal
            </Label>
            <InputDate onChange={handleDateChange}
              id={`${props.id}-date`}
              value={cashflow.date} 
              name="date" 
              placeholder="Tanggal"
              required />
          </div>
        </div>
        <div className="row row-cols-12 my-2">
          <div className="col-12">
            <div className="d-grid">
              <Button type="submit">
                { props.submitLabel ? props.submitLabel : "Simpan" }
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
