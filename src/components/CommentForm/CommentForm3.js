import React from 'react';
import api from '../../services/api'
import './CommentForm.css';

class CommentForm extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		name: '',
		says: ''
	  };
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleChange = this.handleChange.bind(this);
	}
	formatTime() {
	  const options = {
		month: '2-digit',
		day: '2-digit',
		year: '2-digit',
		hour: '2-digit',
		minute:'2-digit'
	  };
	  let now = new Date().toLocaleString('en-US', options);
	  return now;
	}
	escapeHTML(html) { // [1]
	  const div = document.createElement('div');
	  div.textContent = html;
	  return div.innerHTML;
	}
	async handleSubmit(e) {
	  e.preventDefault();
  
	  const user = {
		name: this.escapeHTML(this.state.name),
		says: this.escapeHTML(this.state.says),
		time: this.formatTime(),
	  }
		
	  //const db = database.ref('comments');
	  //db.push(user);
		await api.post('/comment', user);
		console.log(user);
		
	  this.setState({
		name: '',
		says: ''
		})
		window.location.reload();
	}
	handleChange(e) {
	  this.setState({
		[e.target.name]: e.target.value
	  })
	}
	render() {
	  return (
		<div className="comments-form">
		  <form onSubmit={this.handleSubmit} >
			<ul>
			  <li>
				<input
				  name="name"
				  type="text" 
				  placeholder="Nome"  
				  value={this.state.name}
				  onChange={this.handleChange}
				  required
				 />
			  </li>
			  <li>
				<textarea
				  name="says"
				  placeholder="Conte algo..."
				  value={this.state.says}
				  onChange={this.handleChange}
				  required
				></textarea>
			  </li>
			  <li><input type="submit" value="Enviar" /></li>
			</ul>
		  </form>
		</div>
	  )
	}
  }

export default CommentForm;