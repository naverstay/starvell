'use client';

import React, {useMemo, useState} from "react";
import classes from "./style.module.css";
import {clsx} from "clsx";
import SvgSort from "@/assets/icons/Sort";
import {adItem} from "@/types";
import {SELLER_LIST} from "@/fixtues";
import {getCountFormat, getFormatPrice} from "@/helpers";
import SvgFlash from "@/assets/icons/Flash";
import SvgPin from "@/assets/icons/Pin";
import {Button} from "@headlessui/react";
import SellerBlock from "@/pages/game/SellerBlock";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

interface Props {
  list: adItem[]
}

export default function Games(props: Props) {
  const filter = useSelector((state: RootState) => state.filter);
  const [showMore, setShowMore] = useState(2)
  const {list} = props;

  const ads = useMemo(() => {
    const {onlyOnline, flyDelivery, search, tags} = filter;

    let ret: adItem[] = [];
    if (list?.length) {
      for (let i = 0; i < showMore; i++) {
        ret = [...ret, ...list.map((m, mi) => {
          const sellerIndex = mi % SELLER_LIST.length;
          const count = m.count === -1 ? '∞' : getCountFormat(m.count);
          const price = getFormatPrice(m.price, true);
          return {...m, count, price, seller: SELLER_LIST[sellerIndex]}
        })]
      }
    }

    if (onlyOnline) {
      ret = ret.filter(f => f.seller?.online)
    }

    if (flyDelivery) {
      ret = ret.filter(f => f?.flyDelivery)
    }

    if (search) {
      ret = ret.filter(f => f?.text.includes(search))
    }

    if (tags.length) {
      const escapedStrings = tags.map(str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      const regex = new RegExp(`(${escapedStrings.join('|')})`, 'g');
      ret = ret.filter(f => f?.text.match(regex))
    }

    return ret;
  }, [list, showMore, filter])

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
        {ads?.map((item, index) => {
          const {text, count, seller, price, flyDelivery, pinned} = item;

          const ExtraInfo = flyDelivery || pinned ? <div className={classes.extraInfo}>
            {flyDelivery && <span className="text-blue"><SvgFlash/></span>}
            {pinned && <span className="text-orange"><SvgPin/></span>}
          </div> : null

          return <div key={index} className={clsx(classes.gameTableRow, classes.gameTableData)}>
            <div>
              {text}
            </div>

            <div>
              {seller && <SellerBlock {...seller} />}
            </div>

            <div className="text-right">
              {count}
            </div>
            <div className="text-right">
              <div className="font-bold">{price}</div>
              {ExtraInfo}
            </div>
          </div>
        }) ?? null}
      </div>

      <div className="mt-4">
        <Button className={"btnDefault btnXLarge btnWhite w-full justify-center"} onClick={() => {
          setShowMore(showMore + 1);
        }}>
          <span className={"text-gray font-medium"}>Показать больше предложений</span>
        </Button>
      </div>
    </div>
  )
}
