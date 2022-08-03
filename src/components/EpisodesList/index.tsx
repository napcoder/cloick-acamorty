import { Episode } from '../../types'
import DetailsWrapper from '../DetailsWrapper'
import { EpisodeText } from './style'

interface Props {
  episodes: Episode[] | null | undefined
  loading?: boolean
}

export default function EpisodesList({ episodes, loading = false }: Props) {
  return (
    <DetailsWrapper title="Episodes" data={episodes} noDataText="No episodes." loading={loading}>
      <>
        {(episodes ?? []).map((ep) => {
          // console.log(JSON.stringify(ep))
          return (
            <EpisodeText key={ep.id}>
              {ep.episode} - {ep.name}
            </EpisodeText>
          )
        })}
      </>
    </DetailsWrapper>
  )
}
