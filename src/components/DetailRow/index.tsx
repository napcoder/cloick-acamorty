import { DetailLabel, Row, DetailText } from './style'

interface Props {
  label: string
  text: string
  labelMinWidth?: number
  enableBorder?: boolean
}

export default function DetailRow({ label, text, labelMinWidth = 80, enableBorder = true }: Props) {
  return (
    <Row enableBorder={enableBorder}>
      <DetailLabel minWidth={labelMinWidth}>{label}:</DetailLabel>
      <DetailText>{text}</DetailText>
    </Row>
  )
}
