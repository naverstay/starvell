import clsx from 'clsx'
import React from 'react'
import MainHeader from './MainHeader'

const Header = ({className}: { className?: string }) => {
  return (
    <MainHeader className={clsx(className)}/>
  )
}

export default Header
