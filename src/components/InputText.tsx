import * as React from "react";

export type InputMessage = {
  value?: string
}

export type ChangeMessage = {
  value?: string
}

type InputTextProps = {
  id?: string,
  value?: string,
  name?: string,
  placeholder?: string,
  minLength?: number,
  maxLength?: number,
  disabled?: boolean,
  required?: boolean,
  readonly?: boolean,
  onInput?: (m: InputMessage) => void,
  onChange?: (m: ChangeMessage) => void,
}

export default function InputText(props: InputTextProps): React.ReactNode {

  const [val, setValue] = React.useState(props.value)

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
    props.onChange && props.onChange({
      value,
    })
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
    props.onChange && props.onChange({
      value,
    })
  }

  return (
    <input type="text" className="form-control"
      value={val}
      id={props.id} 
      name={props.name} 
      placeholder={props.placeholder}
      minLength={props.minLength}
      maxLength={props.maxLength}
      required={props.required}
      disabled={props.disabled}
      readOnly={props.readonly}
      onInput={handleOnInput}
      onChange={handleOnChange} />
  )

}
