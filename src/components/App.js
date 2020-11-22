import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
	// take the search term and allow it to load images etc
	onSearchSubmit(term) {
		// accessing photos from api unsplash
		// make a request to unsplash api
		axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID GVcaftRqh3cVxQQlgauomURMUy8OJoZGyDPvRtZgEZw'
			}
		});
	}
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}
export default App;
