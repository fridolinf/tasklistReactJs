import React, { Component } from 'react'
import Button from './Button';
import PropTypes from "prop-types";
import "../styles/EditModal.css"

function ConfirmModal({openIsDelete, closed, deleted, itemId}) {
    const delById = id => {
        deleted(id)
    }
    if (openIsDelete) {
        return (
            <div className="modal-container">
                <div className="modal-box">
                    <h3>Are you sure?</h3>
                    <div className="btn-group">
                        <Button
                            text="ok"
                            variant="success"
                            action={() => delById(itemId)}
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