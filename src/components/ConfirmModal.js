import React from 'react'
import Button from './Button';
import PropTypes from "prop-types";
import "../styles/EditModal.css"

function ConfirmModal({openIsDelete, closed, deleted, itemId, dataC}) {

    if (openIsDelete) {
        return (
            <div className="modal-container">
                <div className="modal-box">
                    <h3>anda yakin? data akan dihapus.</h3>
                    <div className="btn-group">
                        <Button
                            text="ok"
                            variant="success"
                            action={() => deleted(itemId)}
                        />
                        <Button
                            text="tutup"
                            variant="warning"
                            action={closed}
                        />
                    </div>
                </div>
            </div>
        )
    }
    else{
        return null;
    }
}


ConfirmModal.propTypes = {
    deleted: PropTypes.func.isRequired,
    closed: PropTypes.func.isRequired
}
export default ConfirmModal;