import { expect, test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test.describe('POM with login simple',()=>{
    test('test with valid credentials', async({page})=>{

        const loginPage=new LoginPage(page);
        await loginPage.goto();
         await expect(page).toHaveTitle('TTACart - Login');
        await loginPage.Login("standard_user","tta_secret");
        await expect(page).toHaveTitle('TTACart - Products');

    });
});
