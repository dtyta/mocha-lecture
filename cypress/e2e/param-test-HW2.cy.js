const TestData = {
  position: {
      bottomLeft: 'bottom-left',
      bottomRight: 'bottom-right',
      topRight: 'top-right',
      topLeft: 'top-left'
  },
  title: {
    bottomLeft: 'ALARM!!!',
    bottomRight: 'ALARM!!!',
    topRight: 'ALARM!!!',
    topLeft: 'ALARM!!!'
  },
  message: {
    bottomLeft: 'We havent beer(',
    bottomRight: 'Our glass is empty',
    topRight: 'Do you want a glass of beer?',
    topLeft: 'Cheers'
  },
  time: 60000,
  type: {
      bottomLeft: 'danger',
      bottomRight: 'warning',
      topRight: 'info',
      topLeft: 'success'
  }
}

const expectRes = {
  icon: {
      bottomLeft: 'flash',
      bottomRight: 'checkmark',
      topRight: 'question-mark',
      topLeft: 'alert-triangle'
  },
  title: {
      bottomLeft: 'ALARM!!!',
      bottomRight: 'ALARM!!!',
      topRight: 'ALARM!!!',
      topLeft: 'ALARM!!!'
  },
  message: {
      bottomLeft: 'We havent beer(',
      bottomRight: 'Cheers',
      topRight: 'Do you want a glass of beer?',
      topLeft: 'Our glass is empty'
  },
  color: {
      bottomLeft: 'rgb(176, 0, 32)',
      bottomRight: 'rgb(96, 175, 32)',
      topRight: 'rgb(4, 149, 238)',
      topLeft: 'rgb(255, 159, 5)'
  },
  position: {
      bottomLeft: {
          justifyContent: 'flex-start',
          alignItems: 'flex-end'
      },
      bottomRight: {
          justifyContent: 'flex-end',
          alignItems: 'flex-end'
      },
      topRight: {
          justifyContent: 'flex-end',
          alignItems: 'flex-start'
      },
      topLeft: {
          justifyContent: 'flex-start',
          alignItems: 'flex-start'
      },
  }
}

beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[alt="Material Dark Theme"]').click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]',{timeout: 10000}).click();
})



describe('Toast tests', () => {
    it('Bottom-left', () => {
        cy.get('[class*="position-select"]').click();
        cy.get(`[ng-reflect-value="${TestData.position.bottomLeft}"]`).click();
    
        cy.get('[name="title"]').click().clear().type(`${TestData.title.bottomLeft}`);
        cy.get('[name="content"]').click().clear().type(`${TestData.message.bottomLeft}`);
        cy.get('[class*="mat-ripple appearance-outline"]').click();
        cy.get(`[ng-reflect-value="${TestData.type.bottomLeft}"]`).click();
        cy.get('[name="timeout"]').click().clear().type(TestData.time);
        cy.get('[class*="mat-ripple appearance-filled"]').click();

        cy.get('div[dir="ltr"]').should('have.css', 'justify-content').and('eq', expectRes.position.bottomLeft.justifyContent);
        cy.get('div[dir="ltr"]').should('have.css', 'align-items').and('eq', expectRes.position.bottomLeft.alignItems);
    
        cy.get(`[class*="status-${TestData.type.bottomLeft}"]`).each(() => {
            cy.get(`[data-name="${expectRes.icon.bottomLeft}"]`).should('be.visible');
            cy.get('[class="title subtitle"]').should('contain', `${expectRes.title.bottomLeft}`);
            cy.get('[class="message"]', {timeout:5000}).should('contain', `${expectRes.message.bottomLeft}`);
        })
        .should('be.visible')
        .should('have.css', 'background-color')
        .and('eq', `${expectRes.color.bottomLeft}`);
    
        cy.get(`[class*="status-${TestData.type.bottomLeft}"]`).wait(TestData.time)
        .should('not.exist');
    });

    it('Bottom-right ', () => {
        cy.get('[class*="position-select"]').click();
        cy.get(`[ng-reflect-value="${TestData.position.bottomRight}"]`).click();
        cy.get('[name="title"]').click().clear().type(`${TestData.title.bottomRight}`);
        cy.get('[name="content"]').click().clear().type(`${TestData.message.bottomRight}`);
        cy.get('[class*="mat-ripple appearance-outline"]').click();
        cy.get(`[ng-reflect-value="${TestData.type.bottomRight}"]`).click();
        cy.get('[name="timeout"]').click().clear().type(TestData.time);
        cy.get('[class*="mat-ripple appearance-filled"]').click();

        cy.get('div[dir="ltr"]').should('have.css', 'justify-content').and('eq', expectRes.position.bottomRight.justifyContent);
        cy.get('div[dir="ltr"]').should('have.css', 'align-items').and('eq', expectRes.position.bottomRight.alignItems);
    
        cy.get(`[class*="status-${TestData.type.bottomRight}"]`).each(() => {
           cy.get('[data-name="${expectRes.icon.bottomRight}"]').should('be.visible');
            cy.get('[class="title subtitle"]').should('contain', `${expectRes.title.bottomRight}`);
            cy.get('[class="message"]').should('contain', `${expectRes.message.bottomRight}`);
        })
        .should('be.visible')
        .should('have.css', 'background-color')
        .and('eq', `${expectRes.color.bottomRight}`);
    
        cy.get(`[class*="status-${TestData.type.bottomRight}"]`).wait(TestData.time)
        .should('not.exist');
    });

    it('Top-right', () => {
        cy.get('[class*="position-select"]').click();
        cy.get('[ng-reflect-value="${TestData.position.topRight}"]').click();
    
        cy.get('[name="title"]').click().clear().type(`${TestData.title.topRight}`);
        cy.get('[name="content"]').click().clear().type(`${TestData.message.topRight}`);
        cy.get('[class*="mat-ripple appearance-outline"]').click();
        cy.get('[ng-reflect-value="${TestData.type.topRight}"]').click();
        cy.get('[name="timeout"]').click().clear().type(TestData.time);
        cy.get('[class*="mat-ripple appearance-filled"]').click();

        cy.get('div[dir="ltr"]').should('have.css', 'justify-content').and('eq', expectRes.position.topRight.justifyContent);
        cy.get('div[dir="ltr"]').should('have.css', 'align-items').and('eq', expectRes.position.topRight.alignItems);
    
        cy.get(`[class*="status-${TestData.type.topRight}"]`).each(() => {
            cy.get(`[data-name="${expectRes.icon.topRight}"]`).should('be.visible');
            cy.get('[class="title subtitle"]').should('contain', `${expectRes.title.topRight}`);
            cy.get('[class="message"]').should('contain', `${expectRes.message.topRight}`);
        })
        .should('be.visible')
        .should('have.css', 'background-color')
        .and('eq', `${expectRes.color.topRight}`);

        cy.get(`[class*="status-${TestData.type.topRight}"]`).wait(TestData.time)
        .should('not.exist');
    });

    it('Top-left', () => {
        cy.get('[class*="position-select"]').click();
        cy.get(`[ng-reflect-value="${TestData.position.topLeft}"]`).click();
    
        cy.get('[name="title"]').click().clear().type(`${TestData.title.topLeft}`);
        cy.get('[name="content"]').click().clear().type(`${TestData.message.topLeft}`);
        cy.get('[class*="mat-ripple appearance-outline"]').click();
        cy.get(`[ng-reflect-value="${TestData.type.topLeft}"]`).click();
        cy.get('[name="timeout"]').click().clear().type(TestData.time);
        cy.get('[class*="mat-ripple appearance-filled"]').click();

        cy.get('div[dir="ltr"]').should('have.css', 'justify-content').and('eq', expectRes.position.topLeft.justifyContent);
        cy.get('div[dir="ltr"]').should('have.css', 'align-items').and('eq', expectRes.position.topLeft.alignItems);
    
        cy.get(`[class*="status-${TestData.type.topLeft}"]`).each(() => {
            cy.get(`[data-name="${expectRes.icon.topLeft}"]`).should('be.visible');
            cy.get('[class="title subtitle"]').should('contain', `${expectRes.title.topLeft}`);
            cy.get('[class="message"]').should('contain', `${expectRes.message.topLeft}`);
        })
        .should('be.visible')
        .should('have.css', 'background-color')
        .and('eq', `${expectRes.color.topLeft}`);
    
        cy.get('[class*="status-${TestData.type.topLeft}"]').wait(TestData.time)
        .should('not.exist');
    });
});