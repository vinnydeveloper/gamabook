export default interface IUseCase<Payload> {
  execute(payload: Payload): Promise<any>
}