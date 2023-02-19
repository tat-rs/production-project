export type Mods = Record<string, boolean | string>;

export interface classNamesProps {
  cls: string;
  mods?: Mods;
  additional?: string[];
}

export function classNames(cls: string, mods?: Mods, additional?: string[]):string {
  return [
    cls,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
