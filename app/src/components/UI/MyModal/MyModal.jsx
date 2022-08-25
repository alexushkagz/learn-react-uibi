import React from 'react';
import cl from './MyModal.module.css';
import PostForm from '../../PostForm'

const MyModal = ({children, visible, setVisible}) => {

	const rootClasses = [cl.myModal];
	if (visible) {
		rootClasses.push(cl.active);
	}

	const closeOnClick = (e) => {
		// Verify if event wasn't bubbled
		if (e.target === e.currentTarget) setVisible(false)
	}

	return (
		<div className={rootClasses.join(' ')} onClick={closeOnClick}>
			<div className={cl.myModalContent}>
				{children}
			</div>
		</div>
	)
}

export default MyModal