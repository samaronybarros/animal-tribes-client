import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useSignup } from 'src/hooks/use-signup'
import { Header } from 'src/components/Header'
import { Loader } from 'src/components/Loader'
import { ErrorMessage } from 'src/components/ErrorMessage'

import { HOME, TRIBE, PROFILE } from 'src/routes/pages'
import { Footer } from 'src/components/Footer'
import {
  Container,
  ContainerInputs,
  ContainerButtons,
  Input,
  Button,
} from 'src/components/Shared'

import { useAuth } from 'src/hooks/use-auth'

export const Signup = (): JSX.Element => {
  const [auth, loadingAuth] = useAuth()
  const history = useHistory()

  if (!loadingAuth && auth) {
    history.push(PROFILE)
  }

  const [name, setName] = useState('')
  const [warriorname, setWarriorname] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(null)

  const [signup, loading] = useSignup()

  const onSubmit = async (event: any) => {
    event.preventDefault()

    try {
      const isSuccess = await signup({ name, warriorname, password })
      if (isSuccess) {
        history.push(TRIBE)
      }
    } catch (err) {
      setErrors(err.graphQLErrors)
    }
  }

  const onBack = () => {
    history.push(HOME)
  }

  const allFieldsFilled = !name || !warriorname || !password

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
              id="name"
              label="Full Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
              error={'ERROR'}
            />
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
                Sing Up
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

export default Signup
