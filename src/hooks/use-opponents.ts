import { useQuery } from '@apollo/react-hooks'
import { QUERY_GET_OPPONENTS, QUERY_GET_OPPONENT } from 'src/graphql/queries'

import { Warrior, Skill } from 'src/ts/types'

type InputProps = {
  id: string
}

export const useOpponents = (): [Warrior[], boolean] => {
  const token = localStorage.getItem('token')

  const context = {
    headers: {
      Authorization: token,
    },
  }
  const { loading, data } = useQuery(QUERY_GET_OPPONENTS, { context })

  return [data?.opponents, loading]
}

export const useOpponent = (input: InputProps): [Skill, boolean] => {
  const { loading, data } = useQuery(QUERY_GET_OPPONENT, { variables: input })

  return [data?.opponent, loading]
}
