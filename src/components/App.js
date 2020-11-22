import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
	// intialize state to an empty array or object
	state = { images: [] };
	// take the search term and allow it to load images etc
	onSearchSubmit = async (term) => {
		// accessing photos from api unsplash
		// make a request to unsplash api
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID GVcaftRqh3cVxQQlgauomURMUy8OJoZGyDPvRtZgEZw'
			}
		});
		this.setState({ images: response.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				{/* // print out number of images that we fetched  */}
				Found: {this.state.images.length} images
			</div>
		);
	}
}
export default App;
