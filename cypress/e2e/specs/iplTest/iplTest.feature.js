import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import iplHomePage from "../../../pages/ipl20/iplHomePage";
import startsPage from "../../../pages/ipl20/startsPage";
import playersInfo from "./playersInfo";
import { forEach } from "cypress/types/lodash";

Given( "User navigate to ipl home page", () => {
    iplHomePage.navigateHome();
})

Then( "Navigate to stats page", () => {
    iplHomePage.navigateStats();
} )

Then( "Update filter for Bowlers with Best-Strike Rate", () => {
    cy.get('div.customSelecBox').eq(1).click();
    cy.get('div.cSBListItemsFilter span.cSBListFItems').contains('BOWLERS').click();
    cy.get('div.cSBListItems').contains('Best Bowling Strike-Rate').click();
    cy.wait( 5000 );
    let playerIds = playersInfo.getReqPlayerId();
    // cy.log( 'fibonacci:' + playerIds);
    let player = {};
    playerIds.forEach( (playerId ) => {
        cy.get( 'div#bowlingTAB > table > tbody > tr').eq( playerId-1).children()
        .then( ($clmElmts ) => {
            
            player.playerName = $clmElmts.eq(1).text();
            player.matchesPlayed = $clmElmts.eq(2).text();
            player.runsConceded = $clmElmts.eq(5).text();
            // player.
            playersInfo.addPlyers( player );
        })
    } )
    // cy.log( "input message:" + playersInfo.getCompletePlayersInfo() );

})



