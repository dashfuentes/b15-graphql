import React, { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { CREATE_NOTE } from "../graphql/Mutation";
import {UPDATE_NOTE} from  "../graphql/Mutation";
import { useNavigate, useLocation } from "react-router-dom";

const Form = () => {

	/* Global varibales declatation block */
	const navigate = useNavigate();
	const location = useLocation();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [date, setDate] = useState("");
	const [author, setAuthor] = useState( "" );
	 const [_id, setId] = useState("")
	/* Global varibales declatation block */

	/* Location store variables */
	const getStateObj = location.state;
	const noteId = location.state && location.state._id !== undefined ? location.state._id :  ""
	 const titleNote = location.state && location.state.title !== undefined ? location.state.title :  "";
	 const contentNote = location.state && location.state.content !== undefined ? location.state.content : "";
	 const dateNote = location.state && location.state.date !== undefined ? location.state.date : "";
	 const authorNote = location.state && location.state.author !== undefined ? location.state.author : "";
	/* Location store variables */


	useEffect( () => {
		
		if ( getStateObj ) {
			setTitle( titleNote );
			setContent( contentNote );
			setDate( dateNote );
			setAuthor( authorNote );
			setId(noteId)
		}
	 
	}, [] );


	//Mutation declaration block
	const [createNote] = useMutation( CREATE_NOTE, {} );
	const [updateNote] = useMutation( UPDATE_NOTE, {} );

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();

				if ( getStateObj ) {
					await updateNote({variables :{title,content,date, author ,_id}})
				} else {
					await createNote({
						variables: { title, content, date, author },
					} );
				}

				navigate("/");
			}}
		>
			<div className="mb-6">
				<label
					for="title"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Title
				</label>
				<input
					type="text"
					id="title"
					value={title}
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
			</div>
			<div className="mb-6">
				<label
					for="content"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Content
				</label>
				<input
					type="textarea"
					id="content"
					value={content}
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					onChange={(e) => {
						setContent(e.target.value);
					}}
				/>
			</div>
			<div className="mb-6">
				<label
					for="date"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Date
				</label>
				<input
					type="date"
					id="date"
					value={date}
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					onChange={(e) => {
						setDate(e.target.value);
					}}
				/>
			</div>
			<div className="mb-6">
				<label
					for="author"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Author
				</label>
				<input
					type="text"
					id="author"
					value={author}
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					onChange={(e) => {
						setAuthor(e.target.value);
					}}
				/>
			</div>
			<div className="flex items-start mb-6"></div>
			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				{getStateObj ? "Update": "Save"}
			</button>
		</form>
	);
};

export default Form;
