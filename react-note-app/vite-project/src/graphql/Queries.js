import { gql } from "@apollo/client";

export const GET_NOTES = gql`
query getNotes{
    getNotes{
        _id
        title
        date
        content
        author
    }
}
`

export const LOGIN = gql`
    query  login($email: String, $password: String) {
            login(email: $email, password: $password){
                email
                password
            }
     }
`