import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import deleteRequest from "src/controllers/services/delete";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

interface propTypes {
  entity: string;
  id: number | string;
  refetch: any;
}
const DeleteModal: React.FC<propTypes> = ({ entity, id, refetch }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { mutate, isLoading } = useMutation(() => deleteRequest(entity, id), {
    onSuccess: () => {
      setOpen(false);
      refetch();
    },
  });

  return (
    <>
      <Button
        size="small"
        color="error"
        onClick={() => setOpen(true)}
        variant="contained"
      >
        {t("Delete")}
      </Button>
      <Modal
        open={open}
        // onClose={}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-box">
          <div>
            <Box sx={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
              <div>
                <ErrorOutlineOutlinedIcon
                  sx={{
                    color: "palette.error.main",
                    fontSize: "5rem",
                    m: "auto",
                  }}
                />
              </div>
              {t("Are you sure you want to delete?")}
            </Box>
            <div className="modal-footer">
              <Button
                onClick={() => setOpen(false)}
                variant="contained"
                style={{
                  backgroundColor: "#ccc",
                  margin: "4px",
                  color: "#000",
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="error"
                disabled={isLoading}
                onClick={() => mutate()}
                sx={{ m: 0.5 }}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteModal;
