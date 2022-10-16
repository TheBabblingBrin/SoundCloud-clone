import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { loadCommentsBySongId } from '../../store/comments';
import CommentForm from './CommentForm';
import SingleComment from './SingleComment';



const CommentsIndex= ({songId}) => {
  const dispatch = useDispatch()


  const comments = dispatch(loadCommentsBySongId(songId));
  console.log(comments)
  return (
    <section>
        <CommentForm />
      {/* <ul>
        {comments?
          comments.comments.map(comment => (
            <SingleComment
              comment={comment}
              key={comment.id}
            />
          )):null
        }
      </ul> */}
    </section>
  );
}

export default CommentsIndex;