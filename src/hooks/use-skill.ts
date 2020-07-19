import { useQuery, useMutation } from '@apollo/react-hooks'
import { QUERY_GET_SKILL } from 'src/graphql/queries'

import { Skill } from 'src/ts/types'
import { MUTATION_UPDATE_SKILL } from 'src/graphql/mutations'

export const useSkill = (): [Skill, boolean] => {
  const { loading, data } = useQuery(QUERY_GET_SKILL, {
    fetchPolicy: 'no-cache',
  })

  return [data?.skill, loading]
}

interface InputProps {
  strength: number
  magic: number
  wisdom: number
  dexterity: number
  faith: number
  agility: number
}

export const useUpdateSkill = (): [
  (input: InputProps) => Promise<Skill>,
  boolean
] => {
  const [mutate, { loading }] = useMutation(MUTATION_UPDATE_SKILL)

  const updateSkill = async (input: InputProps): Promise<Skill> => {
    const { data } = await mutate({ variables: input })

    return data?.updateSkill
  }

  return [updateSkill, loading]
}
