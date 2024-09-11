'use client';

import Image from "next/image";
import RolBtn from "@/components/RolBtn";
import {RobloxItem} from "@/types";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {setTags} from "@/store/filterSlice";
import {useDispatch} from "react-redux";

interface Props {
  robloxList: RobloxItem[];
}

export default function Tags(props: Props) {
  const dispatch = useDispatch();
  const [activeTag, setActiveTag] = useState<number[]>([]);
  const {robloxList} = props;

  const tagClick = useCallback((item: RobloxItem) => {
    let newFilter: number[] = []

    if (item.index !== -1) {
      const find = activeTag.findIndex(f => f === item.index)

      if (find === -1 && item.index) {
        newFilter = [...activeTag, item.index]
      } else {
        newFilter = activeTag.filter((f, fi) => (fi !== find))
      }

      newFilter = [...newFilter]
    }

    setActiveTag(newFilter)
  }, [activeTag]);

  const tagItems: RobloxItem[] = useMemo(() => {
    return robloxList?.length ? [
      ...robloxList.map((m, mi) => {
        return {
          ...m,
          index: mi + 1
        }
      })
    ] : []
  }, [robloxList])

  useEffect(() => {
    //@###ts-expect-error
    dispatch(setTags(tagItems?.filter(f => f?.index ? activeTag.includes(f.index) : false)?.map(m => m.name)))
  }, [activeTag, tagItems])

  return (
    <div className="flex">
      <div className="w-[680px]">
        <h1 className="text-gray text-2xl font-semibold mb-1">Робуксы Roblox</h1>

        <p className="">
          Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую вы сейчас
          смотрите. Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую
          вы сейчас смотрите.
        </p>

        <div className="flex flex-wrap gap-2 my-6">
          {tagItems?.map((m, mi) => {
            return <RolBtn
              key={mi}
              {...m}
              active={activeTag.includes(m?.index ?? -2)}
              action={() => {
                tagClick(m);
              }}
            />
          }) ?? null}
        </div>
      </div>

      <div className="ml-auto">
        <Image
          src={'/rob_lo.png'}
          width="0"
          height="0"
          alt="brand logo"
          className="flex-shrink-0 w-[418px] -translate-y-10 translate-x-16"
          priority
          sizes="100vw"
        />
      </div>
    </div>
  )
}
