export type Mods = Record<string, boolean | string>;

export interface classNamesProps {
  cls: string;
  mods: Mods;
  additional: string[];
}

export function classNames(cls: string, mods: Mods, additional: string[]):string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
    .reduce((clss, [key, value]) => !!value ? clss = [...clss, key] : clss, [])
  ].join(' ')
}