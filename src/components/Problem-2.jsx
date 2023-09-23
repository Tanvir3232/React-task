import ReactModal from 'react-modal';

import { useEffect, useState } from "react";


const Problem2 = () => {
    const [contacts, setContacts] = useState([]);
    const [show, setShow] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => setContacts(data.results))
    }, [])

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    console.log(contacts);
    let showContacts = [];
    if (show === 'usa') {
        showContacts = contacts.filter(item => item.country.name == 'United States');
    } else {
        showContacts = [...contacts];
    }
    const handleContacts = (countryName) => {
        openModal();
        setShow(countryName)
    }
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" onClick={() => handleContacts('all')} type="button" >All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" onClick={() => handleContacts('usa')} type="button" >US Contacts</button>
                </div>

            </div>
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="All Contacts Modal"
            >
                <div className="d-flex justify-content-center gap-3">
                    <button className={`btn btn-lg ${show == 'all' ? 'btn-primary' : 'btn-outline-primary'} `} onClick={() => handleContacts('all')} type="button" >All Contacts</button>
                    <button className={`btn btn-lg ${show == 'usa' ? 'btn-warning' : 'btn-outline-warning'} `} onClick={() => handleContacts('usa')} type="button" >US Contacts</button>
                    <button onClick={closeModal} className={`btn btn-lg btn-outline-danger `}>Close Modal</button>
                </div>
                <div className='container'>
                    <div className='row row-cols-2'>
                        {showContacts.map(item => (
                            <div className='col my-2 ' key={item.id}>
                                <div className='card p-2'>
                                    <p><strong>Country Name: </strong>{item.country.name}</p>
                                    <p><strong>Phone Number:</strong> {item.phone}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



                
            </ReactModal>

        </div>
    );
};

export default Problem2;