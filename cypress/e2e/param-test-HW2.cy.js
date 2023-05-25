
describe('Param.test v2.0', () => {
  
  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[alt="Material Dark Theme"]').click();
    cy.get('[class="menu-title ng-tns-c141-19"]').click();
    cy.get('[title="Toastr"]',{timeout: 10000}).click();
    cy.get('[class="mat-ripple position-select appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
    cy.get('[id="nb-option-25"]').click();
    cy.get('[ng-reflect-name="title"]').click().clear().type('ALARM!!!');
    cy.get('[name="content"]').click().clear().type('Cheers');
    cy.get('[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
    cy.get('[id="nb-option-33"]').click();
    cy.get('[name="timeout"]').click().clear().type('100000000000000000');
    cy.get('[tabindex="0"]').contains('Show toast').click();
    
  })

  it("Toastr Test", () => {
    const TestData = {
        position: 'top-right',
        title: 'test title',
        content: 'Cheers',
        time: '1000',
        type: 'primary'
        }
        cy.get('[ng-reflect-toast="[object Object]"]').should()
    })


  
  })