import React, { useState, useEffect } from 'react';

import './CommentForm.css';
import api from '../../services/api'
import { Form, Input } from 'unform';

export default function CommentForm({ history }) {
	const [data, setData] = useState({});
	
	async function handleSubmit(data) {
		await api.post('/comment', data);
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
						<textarea
							name="says"
							type="text"
							placeholder="fala ae!"
							required
						></textarea>
					</li>
					<li><input type="submit" value="Enviar" /> </li>
				</ul>
			</Form>
		</div>
	)
}
