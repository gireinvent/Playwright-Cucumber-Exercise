import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { Purchase } from '../pages/purchase.page';

Then('Then I will add the {string} to the cart', async (category) => {
    await new Purchase(getPage()).addToCart(category);
  });

// TODO: Select the cart (top-right)

Then('Click on  the cart', async () => {
    await new Purchase(getPage()).selectCart();
  })

Then('Select Checkout', async () => {
    await new Purchase(getPage()).selectCheckout();
  })

Then('Fill in the {string}, {string}, and {string}', async (firstName, lastName, postalCode) => {
    await new Purchase(getPage()).fillIn(firstName, lastName, postalCode);
  })

Then('Click Continue', async () => {   
    await new Purchase(getPage()).clickContinue();
    })

Then('Click Finish', async () => {  
    await new Purchase(getPage()).clickFinish();
    })

Then('Validate the text {string}', async (ordermsg) => {   
    await new Purchase(getPage()).validateOrder(ordermsg);
    })


