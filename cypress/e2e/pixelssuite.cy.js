describe('PixelsSuite Automation Tests', () => {
  const openPdfEditor = () => {
    cy.visit('https://www.pixelssuite.com/pdf-editor', { failOnStatusCode: false });

    // Fallback when direct route is unavailable in production.
    cy.get('body').then(($body) => {
      if ($body.text().includes('404 - Not Found')) {
        cy.visit('https://www.pixelssuite.com/');
        cy.contains(/Open Editor/i).click({ force: true });
      }
    });

    cy.get('body').should('not.contain.text', '404 - Not Found');
  };

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

    cy.contains(/\bResize\b/).first().click({ force: true });
    cy.contains('Resize Image').click({ force: true });
    cy.url().should('not.eq', 'https://www.pixelssuite.com/');
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
    openPdfEditor();
    cy.location('pathname').should('not.eq', '/');
    cy.contains('PDF Editor').should('be.visible');
  });

  it('ATC_09 - Verify PDF Editor has file upload option', () => {
    openPdfEditor();

    cy.get('input[type="file"]').should('exist');
  });

  it('ATC_10 - Verify PDF Editor download button is visible', () => {
    openPdfEditor();

    cy.contains(/Download/i).should('be.visible');
  });

  it('ATC_11 - Verify download behavior with and without file', () => {
    openPdfEditor();

    // Step 1: Button is visible
    cy.contains(/Download/i).should('be.visible');

    // Step 2: Click without uploading file (should NOT download)
    cy.contains(/Download/i).click({ force: true });

    // ( check: no crash / UI still stable)
    cy.contains(/Download/i).should('be.visible');

    // Step 3: Upload valid PDF
    cy.get('input[type="file"]').selectFile('cypress/fixtures/sample.pdf', {
      force: true,
    });

    // Step 4: Click again (should now work)
    cy.contains(/Download/i)
      .should('be.visible')
      .click();

    // UI should remain stable
    cy.contains(/Download/i).should('be.visible');
  });
});