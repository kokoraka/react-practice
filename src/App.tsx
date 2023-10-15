import * as React from "react";
import Cashflow from "./components/cashflow/Cashflow"

export default function App(): React.ReactNode {

  return (
    <Cashflow items={[
      {
        description: "Beli daun meja kayu jati perhutani 140x70",
        type: "credit",
        amount: 1022500,
        date: new Date(1697130000000)
      },
      {
        description: "Cuan Deposito SeaBank 140jt 6% 3 bulan",
        type: "debit",
        amount: 1693808,
        date: new Date(1697216400000)
      },
      {
        description: "Bayar BPJS Kesehatan Kelas 1",
        type: "credit",
        amount: 153500,
        date: new Date(1697216400000)
      }
    ]} />
  )

}
