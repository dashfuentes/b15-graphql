import React, {useEffect} from "react";
import { GET_NOTES } from "../graphql/Queries";
import { useLazyQuery } from "@apollo/client";



const Home = () => {

	//We need to use useEffect in order to prevetn multi-render issues
	useEffect(() => {
	 getNotes()
	}, [])
	

	const [getNotes, { data, error }] = useLazyQuery( GET_NOTES );

	if ( error ) return <h1>Error { error}</h1>
	if ( data ) {
		//console.log(data)
	}
	
	return (

		<div>
			{data && 
				data.getNotes.map( ( { _id, title, author, content, date } ) => (
					<div  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
						<div>
						<svg
						className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
							clipRule="evenodd"
						></path>
						<path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
							</svg>
							<h3>Created at:<span>{date}</span></h3>
						</div>
					
					<a href="#">
						<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
							{title}
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
						{content}
					</p>
					<div data-id={_id}>
						<button
							type="button"
							class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
						>
							Update
						</button>
						<button
							
							class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
							>
								
							Delete
						</button>
					</div>
				</div>
				))
			
			}

			
      
      	
		</div>
	);
};

export default Home;
