'use client';

import Container from '@/components/Container/Container'
import Head from 'next/head'
import Image from "next/image";
import {FILTER_LIST, ROBLOX_LIST} from "@/fixtues";
import RolBtn from "@/components/RolBtn";
import {FilterIem, RobloxIem} from "@/types";
import {GetStaticProps} from "next";
import React, {useCallback, useMemo, useState} from "react";
import {Button} from "antd";
import classes from "@/components/Header/style.module.css";


interface Props {
  robloxList: RobloxIem[];
  filterList: FilterIem[];
}

export const getStaticProps = (async (context) => {
  return {props: {robloxList: ROBLOX_LIST, filterList: FILTER_LIST}}
}) satisfies GetStaticProps<Props>

export default function GamePage(props: Props) {
  const [activeFilter, setActiveFilter] = useState<number[]>([-1]);
  const {robloxList, filterList} = props;

  const filterClick = useCallback((item: FilterIem) => {
    let newFilter = [-1]

    if (item.index !== -1) {
      const find = activeFilter.findIndex(f => f === item.index)

      if (find === -1) {
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
          index: mi,
          name: m.name
        }
      })
    ]
  }, [filterList])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div
        className="flex-1 w-full max-w-[1256px] border-[1px] border-solid border-primary-border bg-white py-10 px-12 rounded-2xl">
        <Container>
          <div className="flex">
            <div className="w-[680px]">
              <h1 className="text-gray text-2xl font-semibold mb-1">Робуксы Roblox</h1>

              <p className="">
                Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую вы сейчас
                смотрите. Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую
                вы сейчас смотрите.
              </p>

              <div className="flex flex-wrap gap-2 my-6">
                {robloxList?.map((m, mi) => {
                  return <RolBtn key={mi} {...m}/>
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

          <div className="flex justify-between ">

            <div className="flex flex-wrap gap-2 my-6">
              {filterItems?.map((m, mi) => {
                return <RolBtn
                  key={mi} {...m}
                  active={activeFilter.includes(m.index)}
                  action={(a) => {
                    filterClick(a);
                  }}
                />
              }) ?? null}
            </div>

            <Button className={"ml-2"}>
              <span className={classes.btnText}>Продать Blox Fruits</span>
            </Button>
          </div>

          <div className="mt-10 border-t-[1px] pt-6 border-solid border-primary-border text-[14px] leading-5">
            <p>
              Робуксы — это валюта платформы мини игр Roblox, обеспечивающая комфортный геймплей и расширенные
              возможности для игрока. Что естественно притягивает толпы желающих их приобрести. Сделать это безопасно и
              без переплат лучше всего на проверенной площадке, которой и является биржа игровых ценностей FunPay. Мы
              обеспечиваем комфортные условия для торговли робуксами Roblox без посредников, поэтому на нашей торговой
              площадке всегда присутствует:
            </p>

            <ul className="list-disc list-inside pl-2">
              <li>Безопасность сделок. Они проходят в три этапа: оплата, получение игровой валюты, подтверждение
                выполнения заказа.
              </li>
              <li>Реальный рыночный курс робуксов. Формируется в условиях естественной конкуренции между продавцами.
              </li>
              <li>Быстрое оформление заказов. Всего за несколько кликов, с оплатой любым удобным для вас способом.
              </li>
            </ul>

            <p className="mb-6">
              Если же у вас возникнут вопросы, то служба поддержки FunPay ответит на них в любое время суток!
            </p>

            <h3 className="text-base font-medium leading-6">Как купить</h3>

            <p>
              Покупка робуксов осуществляется просто, как мы писали выше, нужно сделать всего три действия:
            </p>

            <ol className="list-decimal list-inside pl-2">
              <li>Выбрать предложение, кликнув на него, и находясь на странице оформления заказа, связаться с
                продавцом.
              </li>
              <li>Оплатить заказ на нужное количество робуксов.</li>
              <li>Получить игровую валюту RBX и подтвердить выполнение заказа. После можно оставить отзыв продавцу и
                оценить его работу.
              </li>
            </ol>

            <p className="mb-6">
              Продавец получит ваши деньги только после того, как вы получите робуксы в Roblox и отправите системе
              подтверждение о выполнении заказа.
            </p>

            <h3 className="text-base font-medium leading-6">Продавцам</h3>

            <p>
              Если вы опытный продавец или начинаете свой путь с нуля — неважно, у вас есть замечательная возможность
              продать робуксы через FunPay. Чтобы стать продавцом нашей биржи, следуйте следующим принципам:
            </p>

            <ul className="list-disc list-inside pl-2">
              <li>Выставляйте на продажу только ту сумму, что есть у вас в наличии, чтобы вы смогли быстро передать
                игровую валюту клиенту.
              </li>
              <li>Вежливо отвечайте на вопросы потенциальных покупателей.</li>
              <li>Ответственно относитесь к своим обязанностям и выполняйте заказы в кратчайшие сроки.
              </li>
              <li>Покупатель должен получить столько робуксов, сколько он указал в заказе.</li>
            </ul>

            <p className="mb-6">
              И помните, чем больше у вас довольных клиентов, тем выше шанс превратить своё хобби в отличный источник
              дохода. Присоединяйтесь к FunPay!
            </p>

          </div>
        </Container>
      </div>
    </>
  )
}
