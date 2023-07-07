import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

interface dataI {
  title: string;
  iconClass: string;
  url: string;
}

interface adminPopularI {
  title: string;
  url: string;
  description: string;
}
interface adminLiveI {
  title: string;
  url: string;
}
interface ModalI {
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: dataI | undefined | adminLiveI | adminPopularI;
  setData: React.Dispatch<
    React.SetStateAction<dataI | undefined | adminLiveI | adminPopularI>
  >;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  background: "linear-gradient(to left, #f5be02, #00cbd9, #ea340d)",
  boxShadow: 24,
  borderRadius: '16px',
  color:'white',
  p: 8,
};

export default function BasicModal({
  children,
  isModalOpen,
  setIsModalOpen,
  data,
  setData,
}: ModalI) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData({ title: "", iconClass: "", url: "" });
  };

  React.useEffect(() => {
    handleClose();
  }, [isModalOpen]);

  return (
    <div>
      <button id="modal-btn-id" className="admin__add" onClick={handleOpen}>
        Add New
      </button>
      <Modal
        id="close-modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
