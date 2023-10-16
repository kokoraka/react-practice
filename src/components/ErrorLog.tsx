import * as React  from "react"

type ErrorLogProps = {
  children?: React.ReactNode
}

type ErrorLogState = {
  hasError: boolean,
  error?: Error
}

export default class ErrorLog extends React.Component<ErrorLogProps, ErrorLogState> {

  constructor(props: ErrorLogProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  public static getDerivedStateFromError(error: Error): ErrorLogState {
    // Update state so the next render will show the fallback UI.
    return { 
      hasError: true,
      error
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.group()
    console.error("unexpected error occured:", error)
    console.error("error info", errorInfo)
    console.groupEnd()
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.children
    }
    return this.props.children
  }

}
