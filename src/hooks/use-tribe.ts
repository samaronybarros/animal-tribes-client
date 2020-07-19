import { useMutation } from '@apollo/react-hooks'

import { MUTATION_UPDATE_TRIBE } from 'src/graphql/mutations'

import { Tribes } from 'src/ts/types'

interface InputProps {
  tribe: Tribes
}

export const useTribes = (): [
  (input: InputProps) => Promise<boolean>,
  Boolean
] => {
  const [mutateUpdateTribe, { loading: loadingUpdateTribe }] = useMutation(
    MUTATION_UPDATE_TRIBE
  )

  const updateTribe = async (input: InputProps): Promise<boolean> => {
    const { tribe } = input
    const { data: updateTribeData } = await mutateUpdateTribe({
      variables: { tribe },
    })

    if (!updateTribeData) {
      return false
    }

    return true
  }

  return [updateTribe, loadingUpdateTribe]
}
