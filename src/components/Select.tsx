import * as React from "react";

export type ChangeMessage = {
  index?: number
  value?: string
  label?: string
}

type SelectProps = {
  items: SelectItem[],
  id?: string,
  value?: string,
  name?: string,
  placeholder?: string,
  disabled?: boolean,
  required?: boolean,
  onChange?: (m: ChangeMessage) => void,
}

type SelectItem = {
  value: string
  label: string
}

export default function Select(props: SelectProps): React.ReactNode {
  const [val, setValue] = React.useState(props.value)
  const [items] = React.useState(props.items)

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setValue(value)

    props.onChange && props.onChange({
      index: e.target.selectedIndex,
      value,
      label: e.target.options[e.target.selectedIndex].text
    })
  }

  return (
    <select className="form-select" 
      value={val}
      id={props.id}
      name={props.name}
      required={props.required}
      disabled={props.disabled}
      onChange={handleOnChange}>
      <option>- Belum dipilih -</option>
      {
        items.map((item, i) => {
          return (
            <option value={item.value} key={`select-option-${i}`}>
              {item.label}
            </option>
          )
        })
      }
    </select>
  )

}
