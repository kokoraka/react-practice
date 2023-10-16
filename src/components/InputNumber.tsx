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

const InputNumber = React.forwardRef((props: InputNumberProps, ref: React.ForwardedRef<HTMLInputElement>): React.ReactNode => {

  const [val, setValue] = React.useState(props.value)
  const inputRef = React.useRef<HTMLInputElement>()

  React.useEffect(() => {
    setValue(props.value)
  }, [props.value])

  React.useImperativeHandle(ref, (): any => {
    return {
      focus: () => {
        inputRef.current.focus()
      }
    }
  })
  
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
      ref={inputRef}
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
})

export default InputNumber
