import React, {useState} from "react";
import "./style.css";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

const Home = () => {
    //Declare citySearch state 
    const [citySearch, setCitySearched] = useState( "" );

    //Fetch the GET_WEATHER_QUERY and give the city name argument {}
	const [getWeather, { loading, error, data }] =
        useLazyQuery( GET_WEATHER_QUERY, {
            variables: {name : citySearch}
        } );
    
    if ( error ) return <h1>Not Found</h1>
    
    if ( data ) {
        console.log(data)
    }
   
	return (
		<>
			<div className="container-info">
                <h1 className="header">Search Weather Info by name</h1>
                <input
                    type="text"
                    placeholder="San Salvador"
                    onChange={( e ) => {
                        setCitySearched(e.target.value)
                    }}
                />
                <button onClick={()=> getWeather()} className="search-btn">Search</button>
            </div>          
			<div className="card">
				<img
					src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
					alt="Avatar"
					style={{ width: "100%" }}
                />
                 {/* true && true */}
                { data && (
                    <>
                        <div className="container">
                            <h4>
                                <b>{data.getCityByName.name}</b>
                            </h4>
                            <p><span>Temperature min: </span>{data.getCityByName.weather.temperature.min }</p>
                            <p><span>Temperature max: </span>{data.getCityByName.weather.temperature.min }</p>
                            <h4>
                                <b>Wind Information</b>
                            </h4>
                            <p><span>Speed: </span>{data.getCityByName.weather.wind.speed }</p>
                            
                        </div>
                        </>
                )}
				
			</div>
		</>
	);
};

export default Home;
