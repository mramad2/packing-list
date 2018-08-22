describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it("should have packing list screen", async () => {
    await expect(element(by.id("packingListScreen"))).toBeVisible()
  })

  // it("should have an add button", async () => {
  //   await element(by.text("ADD")).tap()
  //   await expect(element(by.text("ADD"))).toBeVisible()
  // })

  // it("should have a clear button", async () => {
  //   await element(by.text("Clear")).tap()
  //   await expect(element(by.text("Clear"))).toBeVisible()
  // })
})
