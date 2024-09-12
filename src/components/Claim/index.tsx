import clsx from 'clsx'
import {memo, useState} from 'react'
import {Button, Field, Label, Textarea} from '@headlessui/react'

import classes from './style.module.css'
import SvgUploadCloud from "@/assets/icons/UploadCloud";
import DropdownMenu from "@/components/Dropdown";
import {MenuPropsItem} from "@/types";

function Claim() {
  const [menu, setMenu] = useState('')

  const menuItems: MenuPropsItem[] = [
    {
      label: 'Лицом не вышел',
      key: '1',
    },
    {
      label: 'ПМС',
      key: '2',
    },
  ];

  const handleMenuClick = (e: MenuPropsItem) => {
    setMenu(e.key);
  };

  return (
    <div className={clsx(classes.claim)}>
      <div className={clsx(classes.claimTitle)}>
        Жалоба на 0xHearts.com
      </div>

      <div className="flex flex-col gap-3.5">
        <Field className="flex flex-col gap-1">
          <Label className="text-sm/6 text-primary">Причина жалобы</Label>
          <DropdownMenu
            className={"w-full"}
            btnClass={clsx("w-full justify-between btnWhite", classes.claimControls)}
            placeholder={"Выберите причину жалобы"}
            list={menuItems}
            activeIndex={menuItems.findIndex(f => f.key === menu)}
            onAction={handleMenuClick}/>
        </Field>

        <Field className="flex flex-col gap-1">
          <Label className="text-sm/6 text-primary">Опишите проблему</Label>

          <div className={clsx(classes.claimControls, "relative !pb-3")}>
            <Textarea
              className={clsx(classes.claimText)}
              rows={3}
            />
            <span className={classes.claimSymbolCounter}>0/200</span>
          </div>
        </Field>

        <Field className="flex flex-col gap-1">
          <Label className="text-sm/6 text-primary">Доказательства</Label>
          <label className={clsx(classes.claimControls, classes.claimDragDrop)}>
            <input type="file" name="file-uploader" className="hidden" id="file-uploader"/>
            <div className="text-[24px]">
              <SvgUploadCloud/>
            </div>
            <div className={classes.claimDragDropTitle}>
              Выберите файл или перетащите его сюда
            </div>
            <div>
              JPEG или PNG до 5 MB
            </div>
          </label>
        </Field>

        <div className="flex gap-2 pt-2">
          <Button className="btnDefault flex-1 h-10 justify-center btnWhite">
            <span className={"font-medium text-gray"}>Мне нужна поддержка</span>
          </Button>
          <Button className="btnDefault flex-1 h-10 justify-center btnBlue">
            <span className={"font-medium"}>Пожаловаться</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default memo(Claim)
