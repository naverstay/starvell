export function getFormatPrice(str: string | number, useSuffix?: boolean): string {
  let num = str;
  // Ответ от бэка 20.00, копейки не отображаем
  if (typeof str === "string" && str?.includes('.')) {
    num = str.split('.')[0];
  }

  if (useSuffix) {
    return new Intl.NumberFormat('ru-Ru').format(Number(num)) + ' ₽';
  } else {
    return new Intl.NumberFormat('ru-Ru').format(Number(num));
  }
}

export function getCountFormat(str: string | number): string {
  let num = str;

  if (typeof str === "string" && str?.includes('.')) {
    num = str.split('.')[0];
  }

  return new Intl.NumberFormat('ru-RU', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(Number(num));
}

export function getPlural(n: number, str1 = '', str2 = '', str5 = '', showNumber = false) {
  return (showNumber ? n + ' ' : '') + ((((n % 10) == 1) && ((n % 100) != 11)) ? (str1) : (((((n % 10) >= 2) && ((n % 10) <= 4)) && (((n % 100) < 10) || ((n % 100) >= 20))) ? (str2) : (str5)))
}
