import React, { useState } from 'react';

import './CommentForm.css';
import api from '../../services/api'
import { Form, Input } from 'unform';

export default function CommentForm({ history }) {
	const [data] = useState({});

	async function handleSubmit(data) {
		await api.post('/comment', data);
		//console.log(data);
		window.location.reload();
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
						<Input className="formsinput"
							name="says"
							type="text"
							placeholder="fala ae!"
							required
						/>
					</li>
					<li><input type="submit" value="Enviar" /> </li>
				</ul>
			</Form>
		


		</div>
		
	)
}
