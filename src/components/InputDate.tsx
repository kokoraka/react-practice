import * as React from "react";

export type InputMessage = {
  value?: Date
}

export type ChangeMessage = {
  value?: Date
}

type InputDateProps = {
  id?: string,
  value?: Date,
  name?: string,
  placeholder?: string,
  min?: string,
  max?: string,
  disabled?: boolean,
  required?: boolean,
  readonly?: boolean,
  onInput?: (m: InputMessage) => void,
  onChange?: (m: ChangeMessage) => void,
}

export default function InputDate(props: InputDateProps): React.ReactNode {

  const [val, setValue] = React.useState(props.value)

  React.useEffect(() => {
    setValue(props.value)
  }, [props.value])
  
  let dateVal: string
  if (val) {
    dateVal = val.toISOString().slice(0, 10)
  }

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? new Date(e.target.value) : undefined
    setValue(value)
    props.onChange && props.onChange({
      value,
    })
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? new Date(e.target.value) : undefined
    setValue(value)
    props.onChange && props.onChange({
      value,
    })
  }

  return (
    <input type="date" className="form-control"
      value={dateVal} 
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
