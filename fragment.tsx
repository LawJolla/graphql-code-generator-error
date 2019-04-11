import gql from "graphql-tag"

export const FRAGMENT = gql`
    fragment UserFrag on User {
        name
    }
`