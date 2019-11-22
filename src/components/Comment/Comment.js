import React from 'react';
import './Comment.css'

export default function Comment ({username, comment, time}){
	return (
	<div className="comment">
		<h4>{username} disse:</h4>
		<p>{comment}</p>
		
	</div>
);
}