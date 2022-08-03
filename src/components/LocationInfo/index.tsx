import { safeParseAndFormatISODate } from '../../helpers/date-helpers'
import { Location } from '../../types'
import DetailRow from '../DetailRow'
import DetailsWrapper from '../DetailsWrapper'

interface Props {
  title: string
  location: Location | null | undefined
  locationName?: string
  loading?: boolean
}

export default function LocationInfo({ location, title, loading = false, locationName }: Props) {
  return (
    <DetailsWrapper
      data={location}
      title={title}
      loading={loading}
      noDataText={locationName ?? 'Unknown'}>
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
      <DetailRow label="Residents" text={'' + location.residents?.length ?? 0} />
    </>
  )
}
