import { safeParseAndFormatISODate } from '../../helpers/date-helpers'
import { Location } from '../../types'
import DetailRow from '../DetailRow'
import DetailsWrapper from '../DetailsWrapper'

interface Props {
  title: string
  location: Location | null | undefined
  loading?: boolean
}

export default function LocationInfo({ location, title, loading = false }: Props) {
  return (
    <DetailsWrapper data={location} title={title} loading={loading}>
      <InnerLocation location={location as Location} />
    </DetailsWrapper>
  )
}
interface InnerProps {
  location: Location
}

function InnerLocation({ location }: InnerProps) {
  const formattedDate = safeParseAndFormatISODate(location.created ?? '', 'PPP', 'n.a.')
  return (
    <>
      <DetailRow label="Id" text={'#' + location.id} />
      <DetailRow label="Name" text={location.name} />
      <DetailRow label="Type" text={location.type} />
      <DetailRow label="Dimension" text={location.dimension} />
      <DetailRow label="Created" text={formattedDate} />
      <DetailRow label="Residents" text={'' + location.residents.length} />
    </>
  )
}
