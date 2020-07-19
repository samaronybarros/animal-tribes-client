import React from 'react'
import LoaderSpinner from 'react-loader-spinner'

export const Loader = (): JSX.Element => {
  return (
    <LoaderSpinner type="TailSpin" color="#29B2A5" height={100} width={100} />
  )
}
