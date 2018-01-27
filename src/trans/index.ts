
// main language is Chinese, contains
// the type def for a translation
export { TransKey, Translation } from './zh_CN';

import { Translation, messages as zh_CN } from './zh_CN';
import { messages as en } from './en';

export enum LocaleCode {
  en,
  zh,
}

export type Messages = {[code:number]:Translation};

export const messages:Messages = {
  [LocaleCode.en]: en,
  [LocaleCode.zh]: zh_CN,
};
