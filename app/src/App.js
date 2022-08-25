import React, { useState, useRef, useMemo } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';


function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'Aaaa', body: 'Bbbb'},
		{id: 2, title: 'Zzzz', body: 'Aaaa'},
		{id: 3, title: 'Bbbb', body: 'Zzzz'},
	])
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false);

	const sortedPosts = useMemo(() => {
		// console.log("getSortedPosts function")
		if (filter.sort) {
			return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts;
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
	}, [filter.query, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	const clearForm = !modal
	// const clearForm = useMemo(() => !modal,[modal])

	return (
		<div className="App">
			<MyButton style={{marginTop: '15px'}} onClick={() => setModal(true)}>
				Create new post
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm clear={clearForm} create={createPost}/>
			</MyModal>
			<hr style={{margin: '15px 0'}}/>

			<PostFilter 
				filter={filter}
				setFilter={setFilter}
			/>

			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post list"/>
		</div>
	);
}

export default App;
