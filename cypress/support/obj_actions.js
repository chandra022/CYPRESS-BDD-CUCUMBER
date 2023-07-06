//      Validate element existance
export function checkExistance( selectorVal ){
    cy.get(selectorVal).should('exist');
}
//      Validate element with text exist
export function checkExistanceWithText( textVal ){
    cy.contains( textVal ).should("exist");
}
//      Validate text in the element
export function checkText( selectorVal, expText ){
    cy.get( selectorVal ).invoke( 'text' ).then( (txtVal) => {
        expect( txtVal ).to.eql( expText );
    });
}
//      Validate portion of text in the element
export function checkTextContains( selectorVal, expTxt ){
    cy.get( selectorVal ).invoke( 'text' ).then( (txtVal) => {
        expect( txtVal ).to.include( expTxt );
    });
}
//      Validate property of element
export function checkElmProperty( selectorVal, propName, propVal ){
    cy.get( selectorVal ).invoke( 'attr', propName ).should( 'equal', propVal );
}
//      Type value in an element
export function typeValue( selectorVal, inputVal ){
    cy.get( selectorVal ).click().type( inputVal ).should('have.value', inputVal );
}
//      Type value and click on Enter 
export function typeAndEnterVal( selectorVal, inputVal ){
    cy.get( selectorVal ).click().type( inputVal +'{enter}');
}
//      Perform click on an element
export function clickElm( selectorVal ){
    cy.get( selectorVal ).click();
}
//      Perform force click on an element
export function forceClick( selectorVal ){
    cy.get( selectorVal ).click( {force:true} );
}
//      Verify that the element checked
export function validate_check( selectorVal ){
    cy.get( selectorVal ).check({force:true}).should('be.checked');
}
//      Select an item from select object
export function makeSelection( selectorVal, optName){
    cy.get( selectorVal, {timeout:5000} ).select( optName );
}
//      Validate element selected
export function checkSelected( selectorVal ){
    cy.get( selectorVal ).should('be.selected');
}

export function checkUnselected( selectorVal ){
    cy.get( selectorVal ).should('not.be.selected' );
}