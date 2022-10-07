import React from "react";
import AddModal from "../components/Modal";
import CancelButton from "./CancelButton";

const DeleteModal = ({ isOpen, toggle, deleteFunction, title, id, label }) => {
  const deleteBody = (
    <p className="text-center mb-4">
      Are you sure you want to delete <br />
      <b>"{label}"</b>?
    </p>
  );
  const deleteFooter = (
    <div className="btn-wrapper">
      <CancelButton onClick={() => toggle()} />
      <button
        id={id}
        className="btn btn-danger"
        onClick={() => {
          toggle();
          deleteFunction(id);
        }}
      >
        Yes, Delete
      </button>
    </div>
  );

  return (
    <>
      <AddModal
        isOpen={isOpen}
        toggle={toggle}
        toggleModalClose={toggle}
        modalTitle={title}
        modalBody={deleteBody}
        modalFooter={deleteFooter}
        onSubmit={() => {}}
        hideDefaultButtons
        initialValues={{}}
      />
    </>
  );
};

export default DeleteModal;
