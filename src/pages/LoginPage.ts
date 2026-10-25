//Login page
import {test,expect,Locator, Page} from '@playwright/test';

export class LoginPage{
    // page locators
    readonly page:Page;//readonly- can set it one time
    readonly emailInput:Locator ;
    readonly passwordInput:Locator;
    readonly LoginButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.emailInput=page.getByRole("textbox",{name:"Username"});
        this.passwordInput=page.getByRole("textbox",{name:"password"});
        this.LoginButton=page.locator('#login-button');
    }
    //page Actions
    async goto(){
        await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    }
    async Login(username:string,password:string)
    {
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.LoginButton.click();
    }
        
    }




    //page actions
