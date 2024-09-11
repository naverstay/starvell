import {RobloxIem} from "@/types";
import {clsx} from "clsx";

export const RolBtn = (item: RobloxIem) => {
  const {name, count, active, action} = item;

  const className = clsx("flex items-center rounded gap-1.5 py-1 px-3",
    {"cursor-pointer": !!action},
    {"bg-blue text-white": active},
    {"bg-blue/[.08] text-blue": !active}
  );

  return (
    <div className={className} onClick={action ? () => {
      action(item);
    } : undefined}>
      <span className={"text-[14px] font-medium leading-5"}>{name}</span>
      {count && <span className={"text-[10px] font-semibold tracking-[.075em]"}>{count}</span>}
    </div>
  )
}

export default RolBtn
