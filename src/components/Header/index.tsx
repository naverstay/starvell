import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import Container from "@/components/Container/Container";
import {Input} from 'antd';
import SvgSearch from "@/assets/icons/Search";
import classes from './style.module.css'

interface MainHeaderProps {
  className?: string
}

interface Props extends MainHeaderProps {
  onLinkClick?: () => void
}

function isScrolledIntoView(elem: HTMLElement, out = false) {
  return elem.offsetTop + (out ? elem.offsetHeight : 0) < window.scrollY
}

export const MainNavigation = ({className, isDark, mobile}: Props) => {

  return (
    <ul className={className}>

    </ul>
  )
}

const MainHeader = ({className}: MainHeaderProps) => {

  return (
    <header className={clsx(classes.header, className)}>
      <Container>
        <div className="flex gap-[50px] justify-between py-3">
          <Link href={'/'} className={"flex items-center cursor-pointer"}>
            <Image
              src={'/logo.svg'}
              width="0"
              height="0"
              alt="brand logo"
              className="flex-shrink-0 w-[118px]"
              priority
              sizes="100vw"
            />
          </Link>

          <Input size="middle"
                 rootClassName={"w-[384px]"}
                 placeholder="Поиск игр и приложений..."
                 prefix={<span className={"text-lg text-text-icon pr-2"}><SvgSearch/></span>}/>

          <nav className="flex justify-start flex-1">
            <MainNavigation className="hidden lg:flex space-x-5"/>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default MainHeader
