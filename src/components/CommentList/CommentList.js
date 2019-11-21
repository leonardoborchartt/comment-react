import React, { useState, useEffect } from 'react';
import Comment from '../Comment/Comment';
import api from '../../services/api'
import './CommentList.css'

export default function CommentList() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    async function loadComments() {
      const response = await api.get('/comment');
      setComments(response.data);
    }
    loadComments()

  }, []);

    return (
      <>
        {
          comments.reverse().map((comentarios,i) => (
            <Comment 
            key={comentarios._id}
            username={comentarios.name}    
            comment={comentarios.says}    
            /> 
          ))
        }
      </>
    );

}