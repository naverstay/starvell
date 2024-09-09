import clsx from 'clsx'
import {HTMLAttributes, PropsWithChildren} from 'react'

export default function Container(
  {
    children,
    className,
    ...rest
  }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div {...rest} className={clsx('max-w-[1160px] px-4 mx-auto w-[100%]', className)}>
      {children}
    </div>
  )
}
