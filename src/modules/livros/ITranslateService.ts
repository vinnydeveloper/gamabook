export default interface ITranslateService {
  translate(target: string, options: {
    to: string,
    from: string
  }): Promise<string>
}