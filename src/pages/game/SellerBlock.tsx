'use client';

import React from "react";
import classes from "./style.module.css";
import {clsx} from "clsx";
import {Seller} from "@/types";
import {getPlural} from "@/helpers";
import Image from "next/image";

export default function SellerBlock(props: Seller) {
  const {name, online, avatar, age, reviewsCount} = props

  return <div className={classes.seller}>
    <div className={classes.sellerAvatar}>
      <div>
        {avatar && <Image
          src={avatar}
          width="0"
          height="0"
          alt={name || ''}
          className="flex-shrink-0 w-[28px]"
          priority
          sizes="100vw"
        />}
      </div>
      <div className={clsx(classes.sellerStatus, {[classes.sellerOnline]: online})}/>
    </div>
    <div className={classes.sellerName}>
      <span>{name}</span>

    </div>
    <div className={classes.sellerInfo}>
      <span>{age || ''} на сайте{reviewsCount !== undefined ? ', ' + getPlural(reviewsCount, 'отзыв', 'отзыва', 'отзывов', true) : null}</span>
    </div>
  </div>
}
