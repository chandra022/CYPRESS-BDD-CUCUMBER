class statsPage{

    elements = {
            season : () => cy.get('div.sm-lb-tab__link').contains('Season'),
            playerTable : () => cy.get( 'div.battingTAB' )
    }

    
}

module.exports = new statsPage();