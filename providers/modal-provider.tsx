"use client"

import RenameModal from '@/app/components/modals/rename-modal'
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {

    const [isMounted,setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if(!isMounted) return null;
  return (
    <>
    <RenameModal/> 
    </>
  )
}

export default ModalProvider