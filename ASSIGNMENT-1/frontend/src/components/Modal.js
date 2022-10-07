import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import CancelButton from "./CancelButton";
import DeleteButton from "./DeleteButton";
import Form from "./FormData";
import SaveButton from "./SaveButton";

/**
 * Render Add modal
 *
 * @param {*} param0
 */
const AddModal = ({
  toggle,
  toggleModalClose,
  isOpen,
  FooterClassName,
  modalTitle,
  modalBody,
  modalFooter,
  primaryBtnClassName,
  primaryColor,
  cancelColor,
  hideFooter,
  showAddButton,
  hideDefaultButtons,
  id,
  onSubmit,
  initialValues,
  className,
  style,
  onClick,
  onDelete,
}) => (
  <div className="custom-popup">
    <Modal
      id={id}
      isOpen={isOpen}
      toggle={toggle}
      backdrop="static"
      className={className ? className : " w-100 edit-task-modal"}
      style={style}
      centered={true}
    >
      <ModalHeader
        toggle={toggleModalClose}
        close={
          <button className="close" onClick={toggleModalClose}>
            ×
          </button>
        }
        cssModule={{ "modal-title": "w-100 text-center" }}
      >
        <span className="text-center">{modalTitle}</span>
      </ModalHeader>
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        <ModalBody
          style={{
            padding: "10px",
          }}
        >
          <div className="mt-2 mb-3">{modalBody}</div>
        </ModalBody>
        {hideFooter ? (
          ""
        ) : (
          <ModalFooter className={FooterClassName}>
            <div className="container-fluid">
              <div className="text-center">{modalFooter}</div>
            </div>
            {!hideDefaultButtons && (
              <>
                {showAddButton ? (
                  <Button
                    id={id}
                    color={primaryColor}
                    className={primaryBtnClassName}
                    onClick={toggle && onClick}
                  >
                    ADD
                  </Button>
                ) : (
                  <SaveButton
                    id={id}
                    type="submit"
                    color={primaryColor}
                    className={primaryBtnClassName}
                    onClick={toggle && onClick}
                  >
                    Save
                  </SaveButton>
                )}
                <CancelButton id={id} color={cancelColor} onClick={toggle} />

                <DeleteButton id={id} label={"Delete"} onClick={onDelete} />
              </>
            )}
          </ModalFooter>
        )}
      </Form>
    </Modal>
  </div>
);
export default AddModal;
