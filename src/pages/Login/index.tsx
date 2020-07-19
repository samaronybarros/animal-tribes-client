import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Header } from 'src/components/Header'
import { Loader } from 'src/components/Loader'
import { Footer } from 'src/components/Footer'
import { ErrorMessage } from 'src/components/ErrorMessage'
import {
  Container,
  Input,
  ContainerInputs,
  ContainerButtons,
  Button,
} from 'src/components/Shared'

import { HOME, PROFILE } from 'src/routes/pages'

import { useLogin } from 'src/hooks/use-login'
import { useAuth } from 'src/hooks/use-auth'

export const Login = (): JSX.Element => {
  const [auth, loadingAuth] = useAuth()
  const history = useHistory()

  if (!loadingAuth && auth) {
    history.push(PROFILE)
  }

  const [warriorname, setWarriorname] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(null)

  const [login, loading] = useLogin()

  const onSubmit = async (event: any) => {
    event.preventDefault()

    try {
      const isSuccess = await login({ warriorname, password })
      if (isSuccess) {
        history.push(PROFILE)
      }
    } catch (err) {
      setErrors(err.graphQLErrors)
    }
  }

  const onBack = () => {
    history.push(HOME)
  }

  const allFieldsFilled = !warriorname || !password

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <ContainerInputs>
            <ErrorMessage errors={errors} />
            <Input
              id="warriorname"
              label="Warriorname"
              onChange={(event) => setWarriorname(event.target.value)}
              value={warriorname}
            />
            <Input
              id="password"
              label="Password"
              password
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <ContainerButtons>
              <Button
                large
                node="button"
                waves="light"
                onClick={onSubmit}
                disabled={allFieldsFilled}
              >
                Login
              </Button>
              <Button
                large
                className="red"
                node="button"
                waves="light"
                onClick={onBack}
              >
                Back
              </Button>
            </ContainerButtons>
          </ContainerInputs>
        )}
      </Container>

      <Footer />
    </>
  )
}

export default Login
