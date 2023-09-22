import ReactModal from 'react-modal';

import { useEffect, useState } from "react";


const Problem2 = () => {
    const [contacts, setContacts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => setContacts(data.results))
    }, [])
    const usContacts = contacts.filter(item=>item=='usa');
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" onClick={openModal} type="button" >All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>

            </div>
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="All Contacts Modal"
            >
                <h2>All Contacts</h2>
                {

                }
                <button onClick={closeModal}>Close Modal</button>
            </ReactModal>

        </div>
    );
};

export default Problem2;