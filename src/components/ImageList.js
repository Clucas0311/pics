import React from 'react';

const ImageList = (props) => {
	// Create an array of the images found during search
	// all arrays need a key
	const images = props.images.map((image) => <img alt={image.description} key={image.id} src={image.urls.regular} />);
	return <div>{images}</div>;
};

export default ImageList;
