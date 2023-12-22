import test, { expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("Open Home Page and verify page", async ({ page }) => {
    //open url
    await page.goto("https://www.grimelange.com.tr");
    await expect(page).toHaveTitle(
      "Grimelange |  Erkek ve Kadın Giyimde Şıklığın Adresi"
    );

    await page.getByText("×").click();
    await page.getByRole("link", { name: "ERKEK", exact: true }).hover();
    await page.getByRole("link", { name: "Pantolon", exact: true }).click();

    await expect(page).toHaveURL("https://www.grimelange.com.tr/pantolon");
    await expect(
      page.getByRole("heading", { name: "Erkek Pantolon", exact: true })
    ).toBeVisible();

    await page
      .locator("#filterOrderSelect")
      .selectOption({ label: "Fiyata Göre (Artan)" });

    //await expect(page.getByText("Fiyata Göre (Artan)")).toBeVisible();
    //Sıralama alanının değiştiği gözlenir

    await page.getByText("Filtreleme").nth(2).click();

    await page.getByRole("link", { name: "Kargo Pantolon" }).click();
    await expect(
      page.getByRole("heading", { name: "Kargo Pantolon", exact: true })
    ).toBeVisible();

    await page
      .getByRole("link", { name: "CARGO Dokuma Comfort Siyah" })
      .click();

    await page
      .getByRole("link", { name: "CARGO  Comfort Bej  Pantolon", exact: true })
      .click();
    await page.getByText("XXL", { exact: true }).click();

    await page.getByRole("button", { name: "Sepete Ekle" }).click();

    //• Gelen popupta gösterilen fiyat ile ürünün fiyatı aynı mı karşılaştırılır
    //• Ürün adedi 1 arttırılır ve ürün adedinin arttığı kontrol edilir
    //• Fiyatın değiştiği kontrol edilir

    //switch frame

    const sepetiTemizleButton = await page
      .frameLocator(".fancybox-iframe")
      .getByText("Sepeti Temizle");
    await sepetiTemizleButton.click();

    const yesButton = await page.frameLocator('.fancybox-iframe').locator("//button[@class='confirm']");
    await yesButton.click();

    //page.getByRole("button", { name: "Evet",exact:true }).click();
    const sepetiTemizleButton1 = await page
      .frameLocator(".fancybox-iframe")
      .getByText("Sepeti Temizle");
    await sepetiTemizleButton1.click();

    const yesButton1 = await page.frameLocator('.fancybox-iframe').locator("//button[@class='confirm']");
    await yesButton1.click();

    await expect(
      await page.frameLocator('.fancybox-iframe').getByText("Sepetinizde ürün bulunmamaktadır.")
    ).toBeVisible();
  });
});
