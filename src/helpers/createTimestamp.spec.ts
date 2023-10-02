import createTimestamp from "./createTimestamp"

describe("UNIT - CreateTimeStamp", () => {

  it("should create timestamps without date params", () => {
    const timestamps = createTimestamp()

    expect(typeof timestamps).toEqual("object")
    expect(timestamps.created_at).toBeTruthy()
    expect(timestamps.updated_at).toBeTruthy()
  })


  it("should create timestamps with date params", () => {
    const date = new Date()
    const timestamps = createTimestamp(date)

    expect(typeof timestamps).toEqual("object")
    expect(timestamps.created_at).toBeTruthy()
    expect(timestamps.updated_at).toBeTruthy()

    expect(timestamps.created_at).toEqual(date.toISOString())
    expect(timestamps.updated_at).toEqual(date.toISOString())
  })
})