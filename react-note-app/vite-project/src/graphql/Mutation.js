import { gql } from "@apollo/client";

export const CREATE_NOTE = gql`
mutation createNote($title: String!, $content: String!, $date: String!, $author: String!){
    createNote(input: {title: $title, content: $content, date: $date, author: $author}){
        _id
        title 
        content
        date
        author
    }
  
}
`
export const REMOVE_NOTE = gql`
mutation removeNote($id: ID!){
    removeNote(id: $id){
        _id
        title
        content
        date
        author

    }
}
`
export const UPDATE_NOTE = gql`
mutation updateNote($title: String!, $content: String!, $date: String!, $author: String!, $_id: ID){
    updateNote(input: {title: $title, content: $content, date: $date, author: $author} ,  _id : $_id) {
        _id
        title
        content
        author
        date
    }
}
`