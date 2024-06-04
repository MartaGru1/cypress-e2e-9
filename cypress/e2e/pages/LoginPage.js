class LoginPage{

    /*Locators*/
    getUsernameField(){
        return cy.get('#username');
    }
    
    getPasswordField(){
        return cy.get('#password');
    }
    
    getLoginButton(){
        return cy.get('#login_btn');
    }
    
    getSuccessMessage(){
        return cy.get('#success_lgn');
    }
    
    
    /*Methods*/
    
    userLogin(username, password){
        this.getUsernameField().clear().type(username);
        this.getPasswordField().clear().type(password);
        this.getLoginButton().click();
    
    
    
    
    }
    
}   
    
    //ES6
    
    export default LoginPage;