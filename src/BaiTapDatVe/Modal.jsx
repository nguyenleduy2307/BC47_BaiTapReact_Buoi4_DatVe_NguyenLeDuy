import React from 'react'

const Modal = () => {

    return (
        <div className="modal fade" id="exampleModal" style={{top: '30%'}} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fs-5" id="exampleModalLabel">

                            <i class="fa-regular fa-circle-check text-success fs-4 me-3"></i>

                            Thanh toán thành công

                        </h5>

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Modal