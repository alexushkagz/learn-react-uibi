import React, { useState, useRef } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'Javascript', body: 'Description'},
		{id: 2, title: 'Javascript 2', body: 'Description'},
		{id: 3, title: 'Javascript 3', body: 'Description'},
	])
	const [title, setTitle] = useState('');
	const bodyInputRef = useRef();

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			id: Date.now(),
			title,
			body: bodyInputRef.current.value
		}
		setPosts([...posts, newPost]);
		setTitle('');
		bodyInputRef.current.value = '';
	}

	return (
		<div className="App">
			<form>
				{/* Controlled Component */}
				<MyInput
					value={title}
					onChange={event => setTitle(event.target.value)}
					type="text" 
					placeholder="Post title"
				/>
				<MyInput
					ref={bodyInputRef} 
					type="text" 
					placeholder="Post description"
				/>
				<MyButton onClick={addNewPost}>Create post</MyButton>
			</form>
			<PostList posts={posts} title="Post list 1"/>
		</div>
	);
}

export default App;
