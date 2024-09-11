'use client';

import Container from '@/components/Container/Container'
import Head from 'next/head'
import {FILTER_LIST, ROBLOX_LIST} from "@/fixtues";
import {FilterIem, RobloxIem} from "@/types";
import {GetStaticProps} from "next";
import React from "react";
import Infos from "@/pages/game/Infos";
import Filter from "@/pages/game/Filter";
import Tags from "@/pages/game/Tags";

interface Props {
  robloxList: RobloxIem[];
  filterList: FilterIem[];
}

export const getStaticProps = (async () => {
  return {props: {robloxList: ROBLOX_LIST, filterList: FILTER_LIST}}
}) satisfies GetStaticProps<Props>

export default function GamePage(props: Props) {
  const {robloxList, filterList} = props;

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div
        className="flex-1 w-full max-w-[1256px] border-[1px] border-solid border-primary-border bg-white py-10 px-12 rounded-2xl">
        <Container>
          <Tags robloxList={robloxList}/>

          <Filter filterList={filterList}/>

          <Infos/>
        </Container>
      </div>
    </>
  )
}
