export interface RobloxIem {
  name: string,
  count: number,
  active?: boolean
}

export interface FilterIem {
  name: string,
  index: number,
  action?: (a: FilterIem) => void,
  active?: boolean
}

export interface MenuPropsItems {
  label: string,
  key: string
}
