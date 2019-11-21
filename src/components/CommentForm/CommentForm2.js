import React, { useState, useEffect } from 'react';

import './CommentForm.css';
import api from '../../services/api'
import { Form, Input } from 'unform';

export default function CommentForm({ history }) {
	const [data, setData] = useState({});
	
	async function handleSubmit(data) {
		await api.post('/comment', data);
		console.log(history);
	};


	return (
		<div className="comments-form">
			<Form initialData={data} onSubmit={handleSubmit}>
				<ul>
					<li>
						<Input
							name="name"
							type="text"
							placeholder="Nome"
							required
						/>
					</li>
					<li>
						<Input
							name="says"
							type="text"
							placeholder="fala ae!"
							required
						/>
					</li>
					<li><button type="submit" >Enviar</button> </li>
				</ul>
			</Form>
		</div>
	)
}
