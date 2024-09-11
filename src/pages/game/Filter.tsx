'use client';

import RolBtn from "@/components/RolBtn";
import {FilterIem, MenuPropsItem} from "@/types";
import React, {useCallback, useMemo, useState} from "react";
import {Button, Field, Input} from '@headlessui/react'
import DropdownMenu from "@/components/Dropdown";
import classes from "./style.module.css";
import SvgSearch from "@/assets/icons/Search";

interface Props {
  filterList: FilterIem[];
}

export default function Filter(props: Props) {
  const [delivery, setDelivery] = useState('1')
  const [activeFilter, setActiveFilter] = useState<number[]>([-1]);
  const {filterList} = props;

  const deliveryItems: MenuPropsItem[] = [
    {
      label: 'Способ доставки',
      key: '1',
    },
    {
      label: 'Почта',
      key: '2',
    },
    {
      label: 'Самовывоз',
      key: '3',
    },
  ];

  const filterClick = useCallback((item: FilterIem) => {
    let newFilter = [-1]

    if (item.index !== -1) {
      const find = activeFilter.findIndex(f => f === item.index)

      if (find === -1 && item.index) {
        newFilter = [...activeFilter, item.index]
      } else {
        newFilter = activeFilter.filter((f, fi) => (fi !== find))
      }

      newFilter = [...newFilter.filter(f => f !== -1)]
    }

    setActiveFilter(newFilter.length ? newFilter : [-1])
  }, [activeFilter])

  const filterItems: FilterIem[] = useMemo(() => {
    return [
      {
        index: -1,
        name: 'Все'
      },
      ...filterList.map((m, mi) => {
        return {
          index: mi + 1,
          name: m.name
        }
      })
    ]
  }, [filterList])

  const handleDeliveryClick = (e: MenuPropsItem) => {
    setDelivery(e.key);
  };

  return (
    <>
      <div className="flex justify-between border-t-[1px] pt-4 border-solid border-primary-border">
        <div className="flex flex-wrap gap-1">
          {filterItems?.map((m, mi) => {
            return <RolBtn
              key={mi}
              {...m}
              large={true}
              active={activeFilter.includes(m?.index ?? -2)}
              action={() => {
                filterClick(m);
              }}
            />
          }) ?? null}
        </div>

        <DropdownMenu
          className={"ml-1 mr-auto"}
          btnClass={"btnWhite btnLarge"}
          placeholder={"Выберите из списка"}
          list={deliveryItems}
          activeIndex={deliveryItems.findIndex(f => f.key === delivery)}
          onAction={handleDeliveryClick}/>

        <Button className={"ml-2 btnDefault btnBlue btnLarge"}>
          <span className={"btnText"}>Продать Blox Fruits</span>
        </Button>
      </div>

      <div className="flex justify-between gap-1 pt-2">
        <Button className={"btnDefault btnWhite btnLarge"}>
          <span className={"btnText"}>Продать Blox Fruits</span>
        </Button>

        <Field className={classes.filterSearch}>
          <Input placeholder="Поиск по описанию лота..."/>
          <span className={classes.filterSearchIcon}><SvgSearch/></span>
        </Field>
      </div>
    </>
  )
}
