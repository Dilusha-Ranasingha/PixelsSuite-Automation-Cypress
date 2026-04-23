describe('PixelsSuite Automation Tests', () => {
  it('ATC_01 - Verify homepage loads successfully', () => {
    cy.visit('https://www.pixelssuite.com/');
    cy.contains('PixelsSuite').should('be.visible');
  });

  it('ATC_02 - Verify navigation to Image \u2192 PDF page', () => {
    cy.visit('https://www.pixelssuite.com/');
    cy.contains('Image \u2192 PDF').click();
    cy.url().should('include', 'pixelssuite');
  });

  it('ATC_03 - Verify navigation to PDF \u2192 Word page', () => {
    cy.visit('https://www.pixelssuite.com/');
    cy.contains('PDF \u2192 Word').click();
    cy.url().should('include', 'pixelssuite');
  });

  it('ATC_04 - Verify navigation to Word \u2192 PDF page', () => {
    cy.visit('https://www.pixelssuite.com/');
    cy.contains('Word \u2192 PDF').click();
    cy.url().should('include', 'pixelssuite');
  });

  it('ATC_05 - Verify navigation to Resize Image page', () => {
    cy.visit('https://www.pixelssuite.com/');
    cy.contains('Resize Image').click();
    cy.url().should('include', 'pixelssuite');
  });

  it('ATC_06 - Verify navigation to Crop page', () => {
    cy.visit('https://www.pixelssuite.com/');
    cy.contains('To JPG').first().click();
    cy.url().should('include', 'pixelssuite');
  });

  it('ATC_07 - Verify navigation to Compress Image page', () => {
    cy.visit('https://www.pixelssuite.com/');
    cy.contains('Compress Image').click();
    cy.url().should('include', 'pixelssuite');
  });

  it('ATC_08 - Verify navigation to PDF Editor page', () => {
    cy.visit('https://www.pixelssuite.com/pdf-editor');
    cy.contains('PDF Editor').should('be.visible');
  });

  it('ATC_09 - Verify PDF Editor has file upload option', () => {
    cy.visit('https://www.pixelssuite.com/pdf-editor');
    cy.get('input[type="file"]').should('exist');
  });

  it('ATC_10 - Verify PDF Editor download button is visible', () => {
    cy.visit('https://www.pixelssuite.com/pdf-editor');
    cy.contains('Download').should('be.visible');
  });
});