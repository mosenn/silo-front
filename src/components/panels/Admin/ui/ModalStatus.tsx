"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  
} from "../../../ui/animated-modal";

export function ModalStatus(productId:string) {
  // console.log( "modal" ,productId)
 
  return (
    <div className="  flex items-center justify-center ">
      <Modal>
        <ModalTrigger className="bg-gray-300 hover:bg-primary  hover:text-white/90 duration-300   dark:bg-white dark:text-black text-black  " />
        <ModalBody>
          <ModalContent>
            آیا میخواهید محصول را به سایت اضافه کنید ؟
          </ModalContent>
          <ModalFooter className="gap-4" productId={productId} />
           
       
        </ModalBody>
      </Modal>
    </div>
  );
}


