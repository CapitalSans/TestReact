import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';

import classes from './PostsList.module.css';

function PostsList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

  function changeBodyHander(event) {
    setEnteredBody(event.target.value);
  }
  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

    return (
        <>
            <NewPost onBodyChange={changeBodyHander} onAuthorChange={changeAuthorHandler}/>
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Aspen" body="More lorem yaya!" />
                <Post author="Beck" body="Cool story bro." />
            </ul>
        </>
    );
}

export default PostsList;