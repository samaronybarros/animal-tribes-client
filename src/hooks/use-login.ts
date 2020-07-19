import { useMutation } from '@apollo/react-hooks'

import { MUTATION_LOGIN } from 'src/graphql/mutations'

interface InputProps {
  warriorname: string
  password: string
}

export const useLogin = (): [
  (input: InputProps) => Promise<boolean>,
  boolean
] => {
  const [mutateLogin, { loading: LoadingLogin }] = useMutation(MUTATION_LOGIN)

  const login = async (input: InputProps): Promise<boolean> => {
    const { warriorname, password } = input

    const { data: loginData } = await mutateLogin({
      variables: { warriorname, password },
    })

    if (!loginData) {
      return false
    }

    localStorage.setItem('token', loginData.login.token)
    localStorage.setItem('warriorId', loginData.login.warrior.id)

    return true
  }

  return [login, LoadingLogin]
}
