import React from 'react';
// Responsible for rendering individual/showing one image at a time
class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { spans: 0 };
		// Creating a ref
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		// Listens for the event to load and download the image
		this.imageRef.current.addEventListener('load', this.setSpans);
	}
	setSpans = () => {
		const height = this.imageRef.current.clientHeight;

		const spans = Math.ceil(height / 10);
		this.setState({ spans });
	};
	render() {
		const { description, urls } = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				{/* Creating a ref */}
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}
export default ImageCard;
