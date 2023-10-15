import * as React from "react";

export type InputMessage = {
  value?: number
}

export type ChangeMessage = {
  value?: number
}

type InputNumberProps = {
  id?: string,
  value?: number,
  name?: string,
  placeholder?: string,
  min?: number,
  max?: number,
  disabled?: boolean,
  required?: boolean,
  readonly?: boolean,
  onInput?: (m: InputMessage) => void,
  onChange?: (m: ChangeMessage) => void,
}

export default function InputNumber(props: InputNumberProps): React.ReactNode {

  const [val, setValue] = React.useState(props.value)

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? Number(e.target.value) : undefined
    setValue(value)
    props.onInput && props.onInput({
      value,
    })
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? Number(e.target.value) : undefined
    setValue(value)
    props.onChange && props.onChange({
      value,
    })
  }

  return (
    <input type="number" className="form-control"
      value={val}
      id={props.id} 
      name={props.name} 
      placeholder={props.placeholder}
      min={props.min}
      max={props.max}
      required={props.required}
      disabled={props.disabled}
      readOnly={props.readonly}
      onInput={handleOnInput}
      onChange={handleOnChange} />
  )

}
