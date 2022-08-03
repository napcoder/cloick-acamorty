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
        {(episodes ?? []).map((episode) => (
          <EpisodeText key={episode.id}>
            {episode.episode} - {episode.name}
          </EpisodeText>
        ))}
      </>
    </DetailsWrapper>
  )
}
