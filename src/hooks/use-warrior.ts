import { useQuery } from '@apollo/react-hooks'
import { QUERY_GET_WARRIOR } from 'src/graphql/queries'
import { Warrior } from 'src/ts/types'

export const useWarrior = (): [Warrior, boolean] => {
  const { loading, data } = useQuery(QUERY_GET_WARRIOR)

  return [data?.warrior, loading]
}
