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

    // Manipulate the DOM and change the color of an element
    await page.evaluate(() => {
      // Select an element by its CSS selector and set styles
      const element = document.getElementById("filterOrderSelect");
      if (element) {
        element.style.backgroundColor = "lightblue";
        element.style.color = "yellow";
        element.style.border = "border: 10px solid powderblue;";
        // Add more styles as needed
      }
    });

    //Sıralama alanının değiştiği gözlenir

    //await page.pause();
    await page.getByText("Filtreleme").nth(2).click();

    await page.getByRole("link", { name: "Kargo Pantolon" }).click();

    //soft assertion
    await expect
      .soft(page.getByRole("heading", { name: "Kargo Pantolon", exact: true }))
      .toBeVisible();

    await page
      .getByRole("link", { name: "CARGO Dokuma Comfort Siyah" })
      .click();

    await page
      .getByRole("link", { name: "CARGO  Comfort Bej  Pantolon", exact: true })
      .click();
    await page.getByText("XXL", { exact: true }).click();

    const fiyat = await page.locator("#indirimliFiyat").textContent();
    console.log("Fiyat : " + fiyat);

    await page.getByRole("button", { name: "Sepete Ekle" }).click();

    const sepetFiyat = await page
      .frameLocator(".fancybox-iframe")
      .locator("//span[@class='sepetItemB3_2']").textContent();

    console.log("Sepet Fiyat :" + sepetFiyat);
    // Gelen popupta gösterilen fiyat ile ürünün fiyatı aynı mı karşılaştırılır
    // Ürün adedi 1 arttırılır ve ürün adedinin arttığı kontrol edilir
    // Fiyatın değiştiği kontrol edilir

    expect(fiyat?.trim()).toContain(sepetFiyat?.trim());
    //await expect(page.getByTestId('status')).toHaveText('Submitted');
     
    //switch frame

    const sepetiTemizleButton = await page
      .frameLocator(".fancybox-iframe")
      .getByText("Sepeti Temizle");
    await sepetiTemizleButton.click();

    const yesButton = await page
      .frameLocator(".fancybox-iframe")
      .locator("//button[@class='confirm']");
    await yesButton.click();

    //page.getByRole("button", { name: "Evet",exact:true }).click();
    const sepetiTemizleButton1 = await page
      .frameLocator(".fancybox-iframe")
      .getByText("Sepeti Temizle");
    await sepetiTemizleButton1.click();

    const yesButton1 = await page
      .frameLocator(".fancybox-iframe")
      .locator("//button[@class='confirm']");
    await yesButton1.click();

    await expect(
      await page
        .frameLocator(".fancybox-iframe")
        .getByText("Sepetinizde ürün bulunmamaktadır.")
    ).toBeVisible();

    await page
      .frameLocator(".fancybox-iframe")
      .getByText("Sepetinizde ürün bulunmamaktadır.")
      .highlight();
  });
});
