import { useSnackbar, SnackbarKey } from "notistack";

// Define prop types for the Message component
interface MessageProps {
  showSuccessMessage: (message: string) => SnackbarKey;
  showErrorMessage: (message: string) => SnackbarKey;
}

// Message component definition
const Message = (): MessageProps => {
  // Access the enqueueSnackbar function from the useSnackbar hook
  const { enqueueSnackbar } = useSnackbar();
  // Function to show a success message
  const showSuccessMessage = (message: string): SnackbarKey => {
    return enqueueSnackbar(message, { variant: "success" });
  };
  // Function to show an error message
  const showErrorMessage = (message: string): SnackbarKey => {
    return enqueueSnackbar(message, { variant: "error" });
  };
  // Return the showSuccessMessage and showErrorMessage functions
  return {
    showSuccessMessage,
    showErrorMessage,
  };
};

export default Message;
