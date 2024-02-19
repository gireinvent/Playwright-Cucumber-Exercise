import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly filter: string = 'select.product_sort_container'
    private readonly productPrice: string = 'div.inventory_item_price'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async filterProductsByPrice(sortBy: string) {
        await this.page.locator(this.filter).selectOption({ label: sortBy })
    }

    public async validateProductsSortedByPrice(price: string) {
        var prices = await this.page.locator('div.inventory_item_price').allInnerTexts()
       var numprices = prices.map(price => parseFloat(price.replace('$', '')))
        const sortedPrices = numprices.sort((a, b) => a - b)
        if(!(numprices == sortedPrices))
        {
            throw new Error('Prices are not sorted correctly')
        }
    }
}