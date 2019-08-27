import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, CardImg, Media } from 'reactstrap';
import Moment from 'react-moment';

const ModalImage = ({logEntry}) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <CardImg
                bottom
                width='50%'
                src={logEntry.image_url}
                alt={"Surfing at " + logEntry.surf_spot.name}
                onClick={toggle}
            />
            <Modal size={'lg'} isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                <strong>{logEntry.user.name}</strong>
                <br/>
                {logEntry.surf_spot.name} {logEntry.country.name}
            </ModalHeader>
            <ModalBody>
                <Media
                    bottom
                    width='100%'
                    src={logEntry.image_url}
                    alt={"Surfing at " + logEntry.surf_spot.name}
                />
            </ModalBody>
            <ModalFooter>
                <Moment parse="YYYYMMDD" format="MM/DD/YYYY">
                    {logEntry.date}
                </Moment>
            </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalImage;