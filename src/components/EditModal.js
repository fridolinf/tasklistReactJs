import React from 'react'
import Button from './Button';
import PropTypes from "prop-types";
import "../styles/EditModal.css"


 function EditModal({ edit, close, data, change, update} ) {
    if (edit) {
        return (
            <div className="modal-container">
                <div className="modal-box">
                    <h3>Edit task</h3>
                    <div className="input">
                        <input
                            type="text"
                            value={data.title}
                            onChange={change}
                        />
                    </div>
                    <div className="btn-group">
                        <Button
                            text="ok"
                            variant="success"
                            action={update}
                        />
                        <Button
                            text="tutup"
                            variant="warning"
                            action={close}
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


EditModal.propTypes = {
    close: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
}
export default EditModal;