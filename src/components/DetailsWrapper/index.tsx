import { Location, Character, Episode } from '../../types'
import Spinner from '../Spinner'
import { Container, NoDataText, Title } from './style'

interface Props<T extends Character | Location | Episode[] | null | undefined> {
  title: string
  noDataText?: string
  loading?: boolean
  data: T
  children: JSX.Element
}

export default function DetailsWrapper<
  T extends Character | Location | Episode[] | null | undefined
>({ title, loading = false, noDataText = 'No data.', data, children }: Props<T>) {
  return (
    <Container>
      <Title>{title}</Title>
      {loading ? (
        <Spinner isVisible aside />
      ) : data == null || (Array.isArray(data) && data.length === 0) ? (
        <NoDataText>{noDataText}</NoDataText>
      ) : (
        children
      )}
    </Container>
  )
}
