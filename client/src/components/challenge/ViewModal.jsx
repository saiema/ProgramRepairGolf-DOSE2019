import React from 'react';
import './Style.css';
import useModal from 'use-react-modal'

const ViewModal = ({ title,  text}) => {
	const { Modal, closeModal } = useModal()
	return (
		<Modal >

			{title}
		
			<p>{text}</p>
	
			<button onClick={closeModal}>Close me!</button>

		</Modal>
	)
};

export default ViewModal;