import React, {HTMLAttributes, PropsWithChildren} from 'react'
import {Dialog, DialogPanel} from "@headlessui/react";
import {clsx} from "clsx";
import classes from './style.module.css'
import SvgClose from "@/assets/icons/Close";


export default function ModalDialog(
  {
    children,
    isOpen,
    className,
    close,
    ...rest
  }: { isOpen: boolean, close: () => void } & PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <Dialog
      as="div"
      open={isOpen}
      transition={true}
      {...rest}
      className="relative z-100 focus:outline-none"
      onClose={close}>
      <div className={clsx(classes.modalOverlay)}>
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className={clsx(classes.modalContent, "data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0")}>
            <div className={clsx( classes.modalCloseBtn)} onClick={() => {
              close();
            }}>
              <SvgClose/>
            </div>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
