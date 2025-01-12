import React from 'react'
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
import { AlertDialogAction, AlertDialogDescription } from '@radix-ui/react-alert-dialog';

interface ConfirmModelProps{
    children : React.ReactNode;
    onConfirm : () => void;
    disabled? : boolean;
    header : string;
    description? : string;
}
const ConfirmModel = ({
    children,
    onConfirm,
    disabled,
    header,
    description,
}:ConfirmModelProps) => {

    const handleConfirm = () =>{
        onConfirm();
    }
  return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                   {header} 
                </AlertDialogTitle>
                <AlertDialogDescription>
                    {description}
                </AlertDialogDescription>      
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel
                className='hover:bg-black/10'
                >Cancel</AlertDialogCancel>
                <AlertDialogAction
                   disabled={disabled}
                   onClick={handleConfirm}
                   className='p-2 bg-blue-950 rounded-md text-white hover:bg-blue-500' 
                   >
                    Confirm
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    
  )
}

export default ConfirmModel