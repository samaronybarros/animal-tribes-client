import { gql } from 'apollo-boost'

export const MUTATION_SIGNUP = gql`
  mutation Signup($name: String!, $warriorname: String!, $password: String!) {
    signup(name: $name, warriorname: $warriorname, password: $password) {
      id
      warriorname
      name
    }
  }
`

export const MUTATION_LOGIN = gql`
  mutation Login($warriorname: String!, $password: String!) {
    login(warriorname: $warriorname, password: $password) {
      warrior {
        id
        name
        warriorname
      }
      token
    }
  }
`

export const MUTATION_UPDATE_TRIBE = gql`
  mutation UpdateTribe($tribe: String!) {
    updateTribe(tribe: $tribe) {
      id
      name
      warriorname
      tribe
    }
  }
`

export const MUTATION_ADD_SKILL = gql`
  mutation AddSkill {
    addSkill {
      warrior {
        name
      }
      strength
      magic
      wisdom
      dexterity
      faith
      agility
    }
  }
`

export const MUTATION_UPDATE_SKILL = gql`
  mutation UpdateSkill(
    $strength: Int
    $magic: Int
    $wisdom: Int
    $dexterity: Int
    $faith: Int
    $agility: Int
  ) {
    updateSkill(
      strength: $strength
      magic: $magic
      wisdom: $wisdom
      dexterity: $dexterity
      faith: $faith
      agility: $agility
    ) {
      warrior {
        id
        warriorname
        name
        tribe
      }
      strength
      magic
      wisdom
      dexterity
      faith
      agility
    }
  }
`
