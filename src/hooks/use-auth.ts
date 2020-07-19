import { useQuery } from '@apollo/react-hooks'
import { QUERY_GET_WARRIOR } from 'src/graphql/queries'

export const useAuth = (): [boolean, boolean] => {
  const { loading, data } = useQuery(QUERY_GET_WARRIOR)

  if (loading) return [false, loading]

  return [!!data?.warrior?.tribe, loading]
}
