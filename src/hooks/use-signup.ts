import { useMutation } from '@apollo/react-hooks'

import {
  MUTATION_SIGNUP,
  MUTATION_LOGIN,
  MUTATION_ADD_SKILL,
} from 'src/graphql/mutations'

interface InputProps {
  name: string
  warriorname: string
  password: string
}

export const useSignup = (): [
  (input: InputProps) => Promise<boolean>,
  boolean
] => {
  const [mutateSignup, { loading: loadingSignup }] = useMutation(
    MUTATION_SIGNUP
  )
  const [mutateLogin, { loading: LoadingLogin }] = useMutation(MUTATION_LOGIN)
  const [mutateAddSkill, { loading: LoadingAddSkill }] = useMutation(
    MUTATION_ADD_SKILL
  )

  const signup = async (input: InputProps): Promise<boolean> => {
    const { name, warriorname, password } = input

    const { data: signupData } = await mutateSignup({
      variables: { name, warriorname, password },
    })

    if (!signupData) {
      return false
    }

    const { data: loginData } = await mutateLogin({
      variables: { warriorname, password },
    })

    if (!loginData) {
      return false
    }

    localStorage.setItem('token', loginData.login.token)
    localStorage.setItem('warriorId', loginData.login.warrior.id)

    await mutateAddSkill({})

    return true
  }

  return [signup, loadingSignup || LoadingLogin || LoadingAddSkill]
}
