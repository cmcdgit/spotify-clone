"use client";

import { useState, useEffect } from "react";

import AuthModal from "@/components/AuthModal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);


    // ensure modals cannot be seen during server side rendering
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal />
        </>
    )
}


export default ModalProvider;