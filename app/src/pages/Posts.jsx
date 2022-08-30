// @ts-ignore
import React, { useEffect, useState, useRef } from 'react';

import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader';
import MyModal from '../components/UI/MyModal/MyModal';
import Pagination from '../components/UI/pagination/Pagination';
import MySelect from '../components/UI/select/MySelect';
import { useFetching } from '../hooks/useFetcching';
import { useObserver } from '../hooks/useObserver';
import { usePosts } from '../hooks/usePosts';
import { getPageCount } from '../utils/pages';

function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const lastElement = useRef();

	const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		setPosts([...posts, ...response.data]);
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	useObserver(lastElement, page < totalPages, isPostsLoading, () => {
		setPage(page + 1);
	})

	useEffect(() => {
	  fetchPosts(limit, page);
	  console.log(limit,page)
	}, [page, limit])
	

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	const changePage = (page) => {
		setPage(page)
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
			<MySelect
				value={limit}
				onChange={value => setLimit(value)}
				defaultValue="Number of elements on the page"
				options={[
					{value: 5, name: '5'},
					{value: 10, name: '10'},
					{value: 25, name: '25'},
					{value: -1, name: 'All'},
				]}
			/>
			{postError &&
				<h1>There was an error ${postError}</h1>
			}
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post list"/>
			<div ref={lastElement} style={{height: 20, background: 'red'}}></div>
			{isPostsLoading &&
				<Loader/>
			}
			<Pagination 
				page={page} 
				changePage={changePage} 
				totalPages={totalPages}
			/>
			
		</div>
	);
}

export default Posts;
