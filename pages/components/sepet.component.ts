import { Page, Locator, expect, FrameLocator } from "@playwright/test";

class SepetComponent {
  _page: Page;
  _frameLocator: FrameLocator;
  _sepetPrice: Locator;

  constructor(page: Page) {
    this._page = page;
    this._frameLocator = page.frameLocator(".fancybox-iframe");
    this._sepetPrice = page.locator("//span[@class='sepetItemB3_2']");
  }
  
}

export default SepetComponent;
