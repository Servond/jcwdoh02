import { enqueueSnackbar } from "notistack";

export default function Notification(
  message: string,
  status: "success" | "error"
) {
  enqueueSnackbar(message, {
    variant: status,
    anchorOrigin: { horizontal: "right", vertical: "top" },
    autoHideDuration: 2000,
  });
}
