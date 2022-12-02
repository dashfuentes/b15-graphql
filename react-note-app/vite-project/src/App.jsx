import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: "https://localhost:3000/",
	});

	return (
    <ApolloProvider client={client}>
      <Navbar />
			<Home />
		</ApolloProvider>
	);
}

export default App;
