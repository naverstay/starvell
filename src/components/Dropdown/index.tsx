import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {useCallback, useMemo} from "react";
import {MenuPropsItem} from "@/types";
import SvgChevronDown from "@/assets/icons/ChevronDown";

interface MenuListItem extends MenuPropsItem {
  active: boolean
}

interface Props {
  list: MenuPropsItem[],
  activeIndex: number,
  onAction: (index: MenuPropsItem) => void
  placeholder?: string,
}

export default function DropdownMenu(props: Props) {
  const {list, activeIndex, placeholder, onAction} = props;

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
    <div className="text-right">
      <Menu>
        <MenuButton className="group flex gap-2 transition duration-100 ease-out items-center rounded px-3 py-1.5 hover:bg-blue/[.08] data-[open]:bg-blue/[.08]">
          <span className="selectText">
              {value}
          </span>
          <SvgChevronDown className={"transition duration-200 ease-out group-data-[open]:-rotate-180"} />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="origin-top-right z-100 rounded p-1 gap-1 border-[1px] border-solid border-primary-border text-sm/6 bg-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {
            menuList.map((m, mi) => {
              return <MenuItem key={mi}>
                <button
                  onClick={() => {
                    clickHandle(m)
                  }}
                  className="flex w-full items-center transition duration-100 ease-out hover:bg-blue/[.08] gap-2 rounded py-1.5 px-3">{m.label}</button>
              </MenuItem>
            })
          }
        </MenuItems>
      </Menu>
    </div>
  )
}
