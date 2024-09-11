import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import Container from "@/components/Container/Container";
import {Button, Flex, Input} from 'antd';
import SvgSearch from "@/assets/icons/Search";
import classes from './style.module.css'
import {useMemo, useState} from "react";
import {MenuPropsItem} from "@/types";
import DropdownMenu from "@/components/Dropdown";

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

  const handleMenuClick = (e) => {
    setMenu(e.key);
  };

  const handleLangClick = (e) => {
    setLang(e.key);
  };

  const handleCurrencyClick = (e) => {
    setCurrency(e.key);
  };

  const activeMenu = useMemo(() => {
    return menuItems?.find(f => f.key === menu)?.label
  }, [menu])

  const activeLang = useMemo(() => {
    return langItems?.find(f => f.key === lang)?.label
  }, [lang])

  const activeCurrency = useMemo(() => {
    return currencyItems?.find(f => f.key === currency)?.label
  }, [currency])

  return (
    <header className={clsx(classes.header, className)}>
      <Container>
        <Flex gap="50px" justify={"space-between"} align={"center"} className={classes.headerWrapper}>
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

          <div className="w-[384px]">
            <Input size="middle"
                   placeholder="Поиск игр и приложений..."
                   prefix={<span
                     className={"text-lg text-text-icon pr-2"}><SvgSearch/></span>}/>
          </div>

          <nav className="flex justify-end gap-1 flex-1">
            <DropdownMenu
              placeholder={"Выберите из списка"}
              list={menuItems}
              activeIndex={menuItems.findIndex(f => f.key === menu)}
              onAction={handleMenuClick}/>

            <DropdownMenu
              placeholder={"Выберите из списка"}
              list={langItems}
              activeIndex={langItems.findIndex(f => f.key === lang)}
              onAction={handleLangClick}/>

            <DropdownMenu
              placeholder={"Выберите из списка"}
              list={currencyItems}
              activeIndex={currencyItems.findIndex(f => f.key === currency)}
              onAction={handleCurrencyClick}/>

            <Button className={"ml-2"}>
              <span className={"btnText"}>Вход</span>
            </Button>
            <Button className={"ml-0.5"} type="primary">
              <span className={"btnText"}>Регистрация</span>
            </Button>
          </nav>
        </Flex>
      </Container>
    </header>
  )
}

export default MainHeader
