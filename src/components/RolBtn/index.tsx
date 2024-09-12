import {RobloxItem} from "@/types";
import {clsx} from "clsx";
import {Button} from '@headlessui/react'

export const RolBtn = (item: RobloxItem & { large?: boolean, action?: () => void }) => {
  const {name, count, active, action, large = false} = item;

  const className = clsx("flex items-center rounded gap-1.5 px-3 transition duration-100 ease-out",
    {"py-2": large},
    {"py-1": !large},
    {"cursor-default": !action},
    {"cursor-pointer": !!action},
    {"bg-blue hover:bg-blue/[.8] active:bg-blue text-white": active},
    {"bg-blue/[.08] hover:bg-blue/[.18] active:bg-blue text-blue active:text-white": !active}
  );

  return (
    <Button className={className} onClick={() => {
      action && action();
    }}>
      <span className={"text-[14px] font-medium leading-5"}>{name}</span>
      {count && <span className={"text-[10px] font-semibold tracking-[.075em]"}>{count}</span>}
    </Button>
  )
}

export default RolBtn
