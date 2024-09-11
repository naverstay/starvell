import {clsx} from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import Container from "@/components/Container/Container";
import {Button, Field, Input} from '@headlessui/react'
import classes from './style.module.css'
import {useState} from "react";
import {MenuPropsItem} from "@/types";
import DropdownMenu from "@/components/Dropdown";
import SvgSearch from "@/assets/icons/Search";

interface MainHeaderProps {
  className?: string
}

const MainHeader = ({className}: MainHeaderProps) => {
  const [currency, setCurrency] = useState('1')
  const [lang, setLang] = useState('1')
  const [menu, setMenu] = useState('1')

  const currencyItems: MenuPropsItem[] = [
    {
      label: 'RUB',
      key: '1',
    },
    {
      label: 'USD',
      key: '2',
    },
  ];

  const menuItems: MenuPropsItem[] = [
    {
      label: 'Поддержка',
      key: '1',
    },
    {
      label: 'FAQ',
      key: '2',
    },
  ];

  const langItems: MenuPropsItem[] = [
    {
      label: 'Русский',
      key: '1',
    },
    {
      label: 'English',
      key: '2',
    },
  ];

  const handleMenuClick = (e: MenuPropsItem) => {
    setMenu(e.key);
  };

  const handleLangClick = (e: MenuPropsItem) => {
    setLang(e.key);
  };

  const handleCurrencyClick = (e: MenuPropsItem) => {
    setCurrency(e.key);
  };

  return (
    <header className={clsx(classes.header, className || '')}>
      <Container>
        <div className={classes.headerWrapper}>
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

          <Field className={classes.headerSearch}>
            <span className={classes.headerSearchIcon}><SvgSearch/></span>
            <Input placeholder="Поиск игр и приложений..."/>
          </Field>

          <nav className="flex justify-end gap-1 flex-1">
            <DropdownMenu
              className={"ml-2"}
              placeholder={"Выберите из списка"}
              list={menuItems}
              activeIndex={menuItems.findIndex(f => f.key === menu)}
              onAction={handleMenuClick}/>

            <DropdownMenu
              className={"-ml-3"}
              placeholder={"Выберите из списка"}
              list={langItems}
              activeIndex={langItems.findIndex(f => f.key === lang)}
              onAction={handleLangClick}/>

            <DropdownMenu
              className={"-ml-3"}
              placeholder={"Выберите из списка"}
              list={currencyItems}
              activeIndex={currencyItems.findIndex(f => f.key === currency)}
              onAction={handleCurrencyClick}/>

            <Button className="ml-2 btnDefault btnWhite">
              <span className={"btnText"}>Вход</span>
            </Button>
            <Button className="ml-0.5 btnDefault btnBlue">
              <span className={"btnText"}>Регистрация</span>
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default MainHeader
