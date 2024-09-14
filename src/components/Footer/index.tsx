import clsx from 'clsx'
import {memo} from 'react'
import classes from './style.module.css'
import Container from "@/components/Container/Container";
import Link from "next/link";
import Image from "next/image";
import SvgTg from "@/assets/icons/Tg";
import SvgDc from "@/assets/icons/Dc";
import SvgVk from "@/assets/icons/Vk";
import SvgYt from "@/assets/icons/Yt";

function Footer() {
  return (
    <footer className={clsx(classes.footer)}>
      <Container>
        <div className="flex gap-[85px] justify-between py-3">
          <div className={clsx(classes.footerCol)}>
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

            <div className="mt-2">
              © 2024 STARVELL, лучший маркетплейс цифровых товаров и услуг
            </div>
            <div>
              Дизайн сделан в <a href="#" className={clsx(classes.footerLink)}>0xHearts.com</a>
            </div>
          </div>

          <div className={clsx(classes.footerCol)}>
            <div className="font-medium text-[16px] pt-1 text-gray">
              Поддержка
            </div>
            <div className="-mb-1">
              <a href={'#'} className={clsx(classes.footerLink)}>Написать в поддержку</a>
            </div>
            <div className="-mb-1">
              <a href={'#'} className={clsx(classes.footerLink)}>Политика
                конфиденциальности</a>
            </div>
            <div className="-mb-1">
              <a href={'#'} className={clsx(classes.footerLink)}>Пользовательское
                соглашение</a>
            </div>
          </div>

          <div className={clsx("ml-auto", classes.footerCol)}>
            <div className="flex gap-3">
              <div className={clsx(classes.footerSoc, classes.footerSocTg)}>
                <SvgTg/>
              </div>
              <div className={clsx(classes.footerSoc, classes.footerSocDc)}>
                <SvgDc/>
              </div>
              <div className={clsx(classes.footerSoc, classes.footerSocVk)}>
                <SvgVk/>
              </div>
              <div className={clsx(classes.footerSoc, classes.footerSocYt)}>
                <SvgYt/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default memo(Footer)
