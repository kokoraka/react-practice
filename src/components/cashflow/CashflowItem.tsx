import * as React from "react"
import Button from "../Button"
import ButtonGroup from "../ButtonGroup"
import Card from "../Card"
import Badge from "../Badge"
import Money from "../../values/Money"

type CashflowItemProps = {
  cashflow: Cashflow,
  position: number,
  onChange?: (m: ChangeMessage) => void
  onRemove?: (m: RemoveMessage) => void
}

export type ChangeMessage = {
  position: number
}

export type RemoveMessage = {
  position: number
}

type Cashflow = {
  description: string
  type: CashflowType
  amount: Money
  date: Date
}

type CashflowType = "debit" | "credit"

enum CashflowTypeLabel {
  debit = "Debit",
  credit = "Kredit"
}

export default function CashflowItem(props: CashflowItemProps): React.ReactNode {
  
  const [position] = React.useState(props.position)

  const handleOnChange = () => {
    props.onChange && props.onChange({
      position
    })
  }

  const handleOnRemove = () => {
    props.onRemove && props.onRemove({
      position
    })
  }

  return (
   <Card className="my-2">
     {{
       header: (
          <div className="row row-cols-12">
           <div className="col-lg-6 col-sm-12">
            <Badge variant={props.cashflow.type === "credit" ? "danger" : "success"}>
              {CashflowTypeLabel[props.cashflow.type]}
            </Badge>
           </div>
           <div className="col-lg-6 col-sm-12">
            <div className="d-flex justify-content-lg-end">
              <ButtonGroup>
                <Button variant="secondary" theme="outline" size="sm" onClick={handleOnChange}>
                  Ubah
                </Button>
                <Button variant="danger" theme="outline" size="sm" onClick={handleOnRemove}>
                  Hapus
                </Button>
              </ButtonGroup>
            </div>
           </div>
          </div>
       ),
       body: (
         <div className="row row-cols-12">
           <div className="col-lg-6 col-sm-12">
             <p>{props.cashflow.description}</p>
             <span>
              {props.cashflow.amount.getFormatedAmount()}
             </span>
           </div>
           <div className="col-lg-6 col-sm-12">
             <div className="d-flex justify-content-lg-end">
              {props.cashflow.date.toLocaleString(undefined, {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
             </div>
           </div>
         </div>
       )
     }}
   </Card>
  )

}
