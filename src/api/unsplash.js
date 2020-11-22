import axios from 'axios';

// Allows us to make a small customization

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID GVcaftRqh3cVxQQlgauomURMUy8OJoZGyDPvRtZgEZw'
	}
});
