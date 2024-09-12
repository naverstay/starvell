import {Button, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {useCallback, useMemo} from "react";
import {MenuPropsItem} from "@/types";
import SvgChevronDown from "@/assets/icons/ChevronDown";
import clsx from "clsx";

interface MenuListItem extends MenuPropsItem {
  active: boolean
}

interface Props {
  list: MenuPropsItem[],
  activeIndex: number,
  onAction: (index: MenuPropsItem) => void
  btnClass?: string,
  placeholder?: string,
  className?: string,
}

export default function DropdownMenu(props: Props) {
  const {list, activeIndex, placeholder, onAction, className, btnClass = ''} = props;

  const clickHandle = useCallback((item: MenuPropsItem) => {
    onAction(item)
  }, [onAction])

  const menuList: MenuListItem [] = useMemo(() => {
    return list.map((m, mi) => ({
      ...m,
      active: activeIndex === mi
    }))
  }, [list, activeIndex]);

  const value = useMemo(() => {
    return list?.[activeIndex]?.label ?? placeholder
  }, [list, activeIndex, placeholder])

  return (
    <div className={className}>
      <Menu>
        <MenuButton className={clsx("group data-[open]:bg-gray/[.08] btnDefault", btnClass)}>
          <span className="selectText">
              {value}
          </span>
          <SvgChevronDown className={"transition duration-200 ease-out group-data-[open]:-rotate-180"}/>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom start"
          className="origin-top-right z-101 relative rounded p-1 gap-1 border-[1px] border-solid border-primary-disabled text-sm/6 bg-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {
            menuList.map((m, mi) => {
              return <MenuItem key={mi}>
                <Button
                  onClick={() => {
                    clickHandle(m)
                  }}
                  className={clsx("w-full btnDefault justify-start")}>{m.label}</Button>
              </MenuItem>
            })
          }
        </MenuItems>
      </Menu>
    </div>
  )
}
