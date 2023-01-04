import Alert from "react-bootstrap/Alert"

interface IAlertMessageProps {
  message: string
  variant: string | undefined
}

export enum AlertVariantEnum {
  Success = "success",
  Fail = "danger",
}

export default function AlertMessage({ message, variant }: IAlertMessageProps) {
  return (
    <Alert variant={variant} className="mt-3">
      {message}
    </Alert>
  )
}
