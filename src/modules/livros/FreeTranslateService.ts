import { Locale } from "free-translate/dist/types/locales";
import ITranslateService from "./ITranslateService";
import { translate, } from "free-translate";

export default class FreeTranslateService implements ITranslateService {
  translate(target: string, options: { to: string; from: string; }): Promise<string> {
    return translate(target, {
      to: options.to as Locale,
      from: options.from as Locale
    })
  }

}