import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
	// intialize state to an empty array or object
	state = { images: [] };
	// take the search term and allow it to load images etc
	onSearchSubmit = async (term) => {
		// accessing photos from api unsplash
		// make a request to unsplash api
		const response = await unsplash.get('/search/photos', {
			params: { query: term }
		});
		this.setState({ images: response.data.results });
	};
	render() {
		return (
			// Search bar semantics
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				{/* // print out number of images that we fetched  */}
				Found: {this.state.images.length} images
			</div>
		);
	}
}
export default App;
