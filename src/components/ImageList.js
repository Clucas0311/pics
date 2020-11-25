// Import statements
import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
	// Create an array of the images found during search
	// all arrays need a key
	// Every time you render a list you use map function
	const images = props.images.map((image) => {
		// Everytime you make a list you need to define a key with id property
		return <ImageCard key={image.id} image={image} />;
	});
	return <div className="image-list">{images}</div>;
};

export default ImageList;
