import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly checkoutButton: string = 'button#checkout'
    private readonly addtocartButton: string = '.btn btn_primary btn_small btn_inventory'
    private readonly cartButton: string = 'a.shopping_cart_link'
    private readonly firstName: string = 'input#first-name'
    private readonly lastName: string = 'input#last-name'
    private readonly postalCode: string = 'input#postal-code'
    private readonly continueButton: string = 'input#continue'
    private readonly finishButton: string = 'button#finish'
    private readonly txtOrder: string = 'h2.complete-header'

    constructor(page: Page) {
        this.page = page;
    }


    public async addToCart(category: string) {
        
        var elements = await this.page.locator(this.addtocartButton).elementHandles();

        for(let element of elements) {
            var name = await element.getAttribute('name');
            if(name && name.includes(category.toLowerCase())) {
            await element.click();
        }
    }

    }
    
    public async selectCart() {
        await this.page.locator(this.cartButton).click();
    }   

    public async selectCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }

    public async fillIn(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstName).fill(firstName);
        await this.page.locator(this.lastName).fill(lastName);
        await this.page.locator(this.postalCode).fill(postalCode);
       
    }

    public async clickContinue() {
        await this.page.locator(this.continueButton).click();
    }
    public async clickFinish() {
        await this.page.locator(this.finishButton).click();
    }
    public async validateOrder(ordermsg: string) {
        var order = await this.page.locator(this.txtOrder).innerText();
        if(order !== ordermsg) {
            throw new Error(`Expected order message to be {ordermsg} but found ${order}`);
        }   
    }
}