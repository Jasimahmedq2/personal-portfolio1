import React from 'react';

const ScreenShot = ({ openModal, setOpenModal }) => {
  return (

    <div className=''>
      <input type="checkbox" id="screen-shot-modal" className="modal-toggle" />
      <div className="modal">
        <label htmlFor="screen-shot-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <div className="modal-box w-11/12 max-w-5xl p-0">
          <img src={openModal.screenshot} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ScreenShot;