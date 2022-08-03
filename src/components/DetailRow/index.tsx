import { DetailLabel, Row, DetailText, DetailTextContainer } from './style'

interface Props {
  label: string
  text: string
  labelMinWidth?: number
  enableBorder?: boolean
}

export default function DetailRow({ label, text, labelMinWidth = 85, enableBorder = true }: Props) {
  return (
    <Row enableBorder={enableBorder}>
      <DetailLabel minWidth={labelMinWidth}>{label}:</DetailLabel>
      <DetailTextContainer>
        <DetailText>{text}</DetailText>
      </DetailTextContainer>
    </Row>
  )
}
