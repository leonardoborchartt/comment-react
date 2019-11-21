import React from 'react';

import './App.css';
import CommentForm from './components/CommentForm/CommentForm';
import CommentList from './components/CommentList/CommentList';

function App() {
  return (
    <div id="app">
		<div className="comments">
			<h2>Deixe um comentário abaixo!</h2>
			<CommentForm />
			<CommentList />
			<footer>
				My LinkedIn <a target="blank" href="https://www.linkedin.com/in/leonardobuzattaborchartt/">here</a> | &#169; 2019 by <a target="blank" href="https://github.com/leonardoborchartt">Leonardo</a>
			</footer>
		</div>
		
	</div>
  );
}

export default App;
