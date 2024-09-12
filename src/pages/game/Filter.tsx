'use client';

import RolBtn from "@/components/RolBtn";
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/store/store';
import {setFlyDelivery, setOnlyOnline, setSearch} from '@/store/filterSlice';
import {FilterItem, MenuPropsItem} from "@/types";
import React, {useCallback, useMemo, useState} from "react";
import {Button, Field, Input, Switch} from '@headlessui/react'
import DropdownMenu from "@/components/Dropdown";
import classes from "./style.module.css";
import SvgSearch from "@/assets/icons/Search";
import SvgFlash from "@/assets/icons/Flash";
import {setModalOpen} from "@/store/modalSlice";

interface Props {
  filterList: FilterItem[];
}

export default function Filter(props: Props) {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);
  const [delivery, setDelivery] = useState('1')
  const [activeFilter, setActiveFilter] = useState<number[]>([-1]);
  const {filterList} = props;

  const {onlyOnline, flyDelivery, search} = filter;

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

  const handleOnlyOnline = useCallback((val: boolean) => {
    //@###ts-expect-error
    dispatch(setOnlyOnline(val));
  }, [dispatch]);

  const handleFlyDelivery = useCallback((val: boolean) => {
    //@###ts-expect-error
    dispatch(setFlyDelivery(val));
  }, [dispatch])

  const openModal = useCallback(() => {
    //@###ts-expect-error
    dispatch(setModalOpen(true))
  }, [dispatch])

  const handleSearch = useCallback((val: string) => {
    //@###ts-expect-error
    dispatch(setSearch(val));
  }, [dispatch])

  const filterClick = useCallback((item: FilterItem) => {
    let newFilter: number[] = [-1]

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

  const filterItems: FilterItem[] = useMemo(() => {
    const list = filterList?.length ? filterList.map((m, mi) => {
      return {
        index: mi + 1,
        name: m.name
      }
    }) : []

    return [
      {
        index: -1,
        name: 'Все'
      },
      ...list
    ]
  }, [filterList])

  const handleDeliveryClick = (e: MenuPropsItem) => {
    setDelivery(e.key);
  };

  return (
    <>
      <div className="flex justify-between border-t-[1px] pt-4 border-solid border-primary-border">
        <div className="flex flex-wrap gap-1">
          {filterItems?.length ? filterItems.map((m, mi) => {
            return <RolBtn
              key={mi}
              {...m}
              large={true}
              active={activeFilter.includes(m?.index ?? -2)}
              action={() => {
                filterClick(m);
              }}
            />
          }) : null}
        </div>

        <DropdownMenu
          className={"ml-1 mr-auto"}
          btnClass={"btnWhite btnLarge"}
          placeholder={"Выберите из списка"}
          list={deliveryItems}
          activeIndex={deliveryItems.findIndex(f => f.key === delivery)}
          onAction={handleDeliveryClick}/>

        <Button className={"ml-2 btnDefault btnBlue btnLarge"} onClick={() => {
          openModal()
        }}>
          <span className={"btnText"}>Продать Blox Fruits</span>
        </Button>
      </div>

      <div className="flex justify-between gap-1 pt-2">
        <label className={"btnDefault btnWhite btnLarge hover:bg-white !rounded-lg"}>
          <span className={"text-[14px]"}>Только продавцы онлайн</span>
          <Switch
            checked={onlyOnline}
            onChange={handleOnlyOnline}
            className="group relative flex h-4 w-7 cursor-pointer rounded-full bg-primary-disabled p-0.5 transition-colors duration-200 ease-in-out focus:outline-none data-[checked]:bg-blue/[0.8]"
          ><span aria-hidden="true"
                 className="pointer-events-none inline-block size-3 translate-x-0 rounded-full bg-white ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-3"
          />
          </Switch>
        </label>
        <label className={"btnDefault btnWhite btnLarge hover:bg-white !rounded-lg"}>
          <span className={"text-blue text-[12px]"}>
            <SvgFlash/>
          </span>
          <span className={"text-[14px]"}>Моментальная доставка</span>
          <Switch
            checked={flyDelivery}
            onChange={handleFlyDelivery}
            className="group relative flex h-4 w-7 cursor-pointer rounded-full bg-primary-disabled p-0.5 transition-colors duration-200 ease-in-out focus:outline-none data-[checked]:bg-blue/[0.8]"
          ><span aria-hidden="true"
                 className="pointer-events-none inline-block size-3 translate-x-0 rounded-full bg-white ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-3"
          />
          </Switch>
        </label>

        <Field className={classes.filterSearch}>
          <Input value={search} onChange={(e) => {
            handleSearch(e.target.value);
          }} placeholder="Поиск по описанию лота..."/>
          <span className={classes.filterSearchIcon}><SvgSearch/></span>
        </Field>
      </div>
    </>
  )
}
