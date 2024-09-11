import {RobloxIem} from "@/types";
import {clsx} from "clsx";
import {Button} from "antd";

export const RolBtn = (item: RobloxIem & { large: boolean }) => {
  const {name, count, active, action, large = false} = item;

  const className = clsx("flex items-center rounded gap-1.5 px-3",
    {"py-2": large},
    {"py-1": !large},
    {"cursor-default": !action},
    {"cursor-pointer": !!action},
    {"bg-blue text-white": active},
    {"bg-blue/[.08] text-blue": !active}
  );

  return (
    <Button type={"text"} className={className} onClick={action ? () => {
      action(item);
    } : undefined}>
      <span className={"text-[14px] font-medium leading-5"}>{name}</span>
      {count && <span className={"text-[10px] font-semibold tracking-[.075em]"}>{count}</span>}
    </Button>
  )
}

export default RolBtn
