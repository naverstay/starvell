'use client';

import Image from "next/image";
import RolBtn from "@/components/RolBtn";
import {RobloxIem} from "@/types";
import React, {useCallback, useMemo, useState} from "react";

interface Props {
  robloxList: RobloxIem[];
}

export default function Tags(props: Props) {
  const [activeTag, setActiveTag] = useState<number[]>([10]);
  const {robloxList} = props;

  const tagClick = useCallback((item: RobloxIem) => {
    let newFilter = []

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
  }, [activeTag])


  const tagItems: RobloxIem[] = useMemo(() => {
    return [
      ...robloxList.map((m, mi) => {
        return {
          ...m,
          index: mi + 1
        }
      })
    ]
  }, [robloxList])

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
