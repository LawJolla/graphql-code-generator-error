import gql from "graphql-tag"
import { FRAGMENT } from "./fragment";

// const FRAGMENT = gql`
//     fragment UserFrag on User {
//         name
//     }
// `
const USER_QUERY = gql`
    query user {
        user {
            id
            ...UserFrag
        }
    }
   ${FRAGMENT}
`