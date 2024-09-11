'use client';

import React, {useMemo} from "react";
import classes from "./style.module.css";
import {clsx} from "clsx";
import SvgSort from "@/assets/icons/Sort";
import {adItem, Seller} from "@/types";
import {SELLER_LIST} from "@/fixtues";
import {getCountFormat, getFormatPrice, getPlural} from "@/helpers";
import SvgFlash from "@/assets/icons/Flash";
import SvgPin from "@/assets/icons/Pin";
import Image from "next/image";

interface Props {
  list: adItem[]
}

const SellerBlock = (props: Seller) => {
  const {name, online, avatar, age, reviewsCount} = props

  return <div className={classes.seller}>
    <div className={classes.sellerAvatar}>
      <div>
        <Image
          src={avatar}
          width="0"
          height="0"
          alt={name}
          className="flex-shrink-0 w-[28px]"
          priority
          sizes="100vw"
        />
      </div>
      <div className={clsx(classes.sellerStatus, {[classes.sellerOnline]: online})}/>
    </div>
    <div className={classes.sellerName}>
      <span>{name}</span>

    </div>
    <div className={classes.sellerInfo}>
      <span>{age} на сайте{reviewsCount !== undefined ? ', ' + getPlural(reviewsCount, 'отзыв', 'отзыва', 'отзывов', true) : null}</span>
    </div>
  </div>
}

export default function Games(props: Props) {
  const {list} = props;

  const ads = useMemo(() => {
    return [...list, ...list].map((m, mi) => {
      const sellerIndex = mi % SELLER_LIST.length;
      const count = m.count === -1 ? '∞' : getCountFormat(m.count);
      const price = getFormatPrice(m.price, true);
      return {...m, count, price, seller: SELLER_LIST[sellerIndex]}
    })
  }, [list])

  return (
    <div className="mt-8">
      <div className={classes.gameTable}>
        <div className={clsx(classes.gameTableRow, classes.gameTableHead, "mb-1")}>
          <span>Описание</span>
          <span>Продавец</span>
          <span className="flex items-center justify-end gap-1"><span>Наличие</span>
            <span className={classes.sortIcon}><SvgSort/></span>
          </span>
          <span className="flex items-center justify-end gap-1"><span>Цена</span>
            <span className={classes.sortIcon}><SvgSort/></span>
          </span>
        </div>
        {ads.map((item, index) => {
          const {text, seller, count, price, flyDelivery, pinned} = item;

          const ExtraInfo = flyDelivery || pinned ? <div className={classes.extraInfo}>
            {flyDelivery && <span className="text-blue"><SvgFlash/></span>}
            {pinned && <span className="text-orange"><SvgPin/></span>}
          </div> : null

          return <div key={index} className={clsx(classes.gameTableRow, classes.gameTableData)}>
            <div>
              {text}
            </div>

            <SellerBlock {...seller} />

            <div className="text-right">
              {count}
            </div>
            <div className="text-right">
              <div className="font-bold">{price}</div>
              {ExtraInfo}
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
