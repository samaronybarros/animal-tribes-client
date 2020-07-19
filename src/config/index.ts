type Config = {
  baseUrl: string
}

const dev: string = 'http://localhost:4000/graphql'
const prod: string = 'https://animal-tribes-test-server.herokuapp.com/graphql'

const config: Config = {
  baseUrl: process.env.NODE_ENV === 'development' ? dev : prod,
}

export default config
