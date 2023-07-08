class iplHomePage{

    url = "https://www.iplt20.com";
    statsUrl = '/stats/2023';
    elements = {
            iplLogo : () => cy.get(".ap-ipl-logo"),
            statsHeading : () => cy.contains('STATS').eq(0)
    }

    navigateHome(){
        cy.visit( this.url );
        this.elements.iplLogo().should('be.visible');
    }
    navigateStats(){
        this.elements.statsHeading()
        .click({force:true});
        cy.url().should('contain', this.statsUrl);
    }
}

module.exports = new iplHomePage();
