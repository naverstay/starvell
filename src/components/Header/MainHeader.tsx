import clsx from 'clsx'
import Image from 'next/image'
import {usePathname, useRouter} from 'next/navigation'
import {useCallback, useEffect} from 'react'
import {useSharedState} from '@/hooks/useSharedState'
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

export const MainNavigation = ({className, onLinkClick, isDark, mobile}: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const activeSection = null
  const getLiClassname = useCallback(
    (section?: string, activeAdditionalCondition = false, mainActiveCondition = false) => {
      const isActive = mainActiveCondition || (section && activeSection === section)
      return clsx(
        classes.navLink,
        isActive ? 'border-primary-alpha pb-1' : 'border-transparent border-primary-alpha',
        mobile && classes.mobileLink,
        mobile && (isActive || activeAdditionalCondition) && classes.activeLink,
        isDark ? classes.hoverDark : ''
      )
    },
    [activeSection, isDark]
  )
  const colorClass = clsx(isDark ? 'text-white' : 'text-primary-alpha')
  return (
    <ul className={className}>
      <li
        key="workshop"
        className={getLiClassname('workshop')}
        data-base-hover="true"
        onClick={() => {
          router.push('/#workshop')
          onLinkClick?.()
        }}
      >
        <span className={colorClass}>
          Конструктор
        </span>
      </li>
    </ul>
  )
}

const MainHeader = ({className}: MainHeaderProps) => {
  const router = useRouter()
  const [, setScrollTopBtnDismissed] = useSharedState('scrollTopBtnDismissed')


  const goHome = () => {
    router.push('/')
  }
  useEffect(() => {
    const onScroll = () => {
      const workshopElement = document.querySelector('#work_area') as HTMLElement
      if (workshopElement && !isScrolledIntoView(workshopElement, true)) {
        setScrollTopBtnDismissed((data: any) => ({...data, show: false}))
      } else {
        setScrollTopBtnDismissed((data: any) => ({...data, show: true}))
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className={clsx(classes.header, className)}>
      <nav className="flex justify-start mr-auto">
        <MainNavigation className="hidden lg:flex space-x-5"/>
      </nav>
      <div className="flex justify-center items-center" onClick={goHome} onTouchStart={goHome}>
        <Image
          src={'/logo.svg'}
          width="0"
          height="0"
          alt="brand logo"
          className="flex-shrink-0 md:w-[54px] lg:h-[61px] w-[46px] h-[51px] cursor-pointer"
          priority
          sizes="100vw"
        />
      </div>
    </header>
  )
}

export default MainHeader
