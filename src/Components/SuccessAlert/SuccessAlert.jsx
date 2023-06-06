import { AlertTitle, Alert } from "@mui/material";

const SuccessAlert = (message) => {
  return (
    <Alert severity='success'>
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>{{ message }}</strong>
    </Alert>
  );
};

export default SuccessAlert;
