import { gql } from 'apollo-boost'

export const QUERY_GET_WARRIOR = gql`
  query GetWarrior {
    warrior {
      id
      warriorname
      name
      tribe
    }
  }
`

export const QUERY_GET_SKILL = gql`
  query GetSkill {
    skill {
      strength
      magic
      wisdom
      dexterity
      faith
      agility
      warrior {
        id
        warriorname
        name
        tribe
      }
    }
  }
`

export const QUERY_GET_OPPONENTS = gql`
  query GetSkill {
    opponents {
      id
      name
      tribe
      warriorname
    }
  }
`

export const QUERY_GET_OPPONENT = gql`
  query GetSkill($id: ID!) {
    opponent(id: $id) {
      strength
      magic
      wisdom
      dexterity
      faith
      agility
      warrior {
        id
        warriorname
        name
        tribe
      }
    }
  }
`
