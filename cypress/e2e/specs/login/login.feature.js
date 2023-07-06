import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given( "User navigated to login page", () => {
    cy.visit( "https://www.google.com");
})