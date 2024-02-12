// React Imports
import { useRef } from "react";

// MUI Imports
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Third-party Imports
import { toast } from "react-toastify";

const ToastsProgrammatically = () => {
  const toastId = useRef(null);

  const notify = () => (toastId.current = toast("Lorem ipsum dolor"));

  const dismiss = () => toast.dismiss(toastId.current);

  const dismissAll = () => toast.dismiss();

  return (
    <div
    className='flex text-center flex-col items-center'
    > 
      <i className='tabler-braces mbe-2 text-[42px]'/>
      <Typography className='mbe-4' variant='h5'>Remove Programmatically</Typography>
      <Typography className='mbe-3'>Remove last or all toast(s) programmatically</Typography>
      <div className='flex gap-4'>
        <Button variant='contained' onClick={notify}>Notify</Button>
        <Button variant='contained' onClick={dismiss}>Dismiss</Button>
        <Button variant='contained' onClick={dismissAll}>Dismiss All</Button>
      </div>
    </div>
  );
};

export default ToastsProgrammatically;
