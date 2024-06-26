// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
  });
  let countSelected1 = 0;
  let countSelected2 = 0;
  let countSelected3 = 0;
  let countSelected4 = 0;
  let countSelected5 = 0;
  let countSelected6 = 0;
  let countSelected7 = 0;
  let countSelected8 = 0;
  let countSelected9 = 0;
  let countSelected10 = 0;
  let countSelected11 = 0;
  it("click", () => {
    cy.visit("/?utm_source=test&utm_source=test&utm_campaign=test");
    cy.get(
      "#wrapper > header > div > div > nav > div.p-header__nav-blank > a.c-button.c-button__row2.p-header__nav-blank-button"
    )
      .invoke("removeAttr", "target")
      .click();
    cy.get("#area_select").select("北海道");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 1);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected1 = $elements.length;
        if (countSelected1 < 1) {
          const time = new Date();
          const timeFailed = `${time.getFullYear()}${
            time.getMonth() + 1
          }${time.getDate()} - ${time.toLocaleTimeString()}`;
          cy.screenshot(`北海道_${timeFailed}`);
    
        }
        
      });
    cy.get("#area_select").select("北海道");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 1);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected2 = $elements.length;
        if (countSelected2 < 1) {
          const time = new Date();
          const timeFailed = `${time.getFullYear()}${
            time.getMonth() + 1
          }${time.getDate()} - ${time.toLocaleTimeString()}`;
          cy.screenshot(`北海道_${timeFailed}`);
        }
        
      });
    cy.get("#area_select").select("東京23区");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 6);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected3 = $elements.length;
        if (countSelected3 < 6) {
          const time = new Date();
          const timeFailed = `${time.getFullYear()}${
            time.getMonth() + 1
          }${time.getDate()} - ${time.toLocaleTimeString()}`;
          cy.screenshot(`東京23区_${timeFailed}`);
    
        }
        
      });
    cy.get("#area_select").select("東京23区外");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 3);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected4 = $elements.length;
        if (countSelected4 < 3) {
          const time = new Date();
          const timeFailed = `${time.getFullYear()}${
            time.getMonth() + 1
          }${time.getDate()} - ${time.toLocaleTimeString()}`;
          cy.screenshot(`東京23区外_${timeFailed}`);
    
        }
        
      });
    cy.get("#area_select").select("神奈川県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 2);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected5 = $elements.length;
        if (countSelected5 < 2) {
          const time = new Date();
          const timeFailed = `${time.getFullYear()} ${
            time.getMonth() + 1
          } ${time.getDate()} - ${time.toLocaleTimeString()}`;
          cy.screenshot(`神奈川県_${timeFailed}`);
    
        }
        
      });
    cy.get("#area_select").select("神奈川県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 2);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected6 = $elements.length;
        if (countSelected6 < 2) {
          const time = new Date();
          const timeFailed = `${time.getFullYear()}${
            time.getMonth() + 1
          }${time.getDate()} - ${time.toLocaleTimeString()}`;
          cy.screenshot(`神奈川県_${timeFailed}`);
    
        }
        
      });
    cy.get("#area_select").select("埼玉県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 2);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected7 = $elements.length;
        if (countSelected7 < 2) {
          const time = new Date();
          const timeFailed = `${time.getFullYear()}${
            time.getMonth() + 1
          }${time.getDate()} - ${time.toLocaleTimeString()}`;
          cy.screenshot(`埼玉県_${timeFailed}`);
    
        }
        
      });
    cy.get("#area_select").select("千葉県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 4);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected8 = $elements.length;
        if (countSelected8 < 4) {
          const time = new Date();
          const timeFailed = `${time.getFullYear()}${
            time.getMonth() + 1
          }${time.getDate()} - ${time.toLocaleTimeString()}`;
          cy.screenshot(`千葉県_${timeFailed}`);
    
        }
        
      });
    cy.get("#area_select").select("大阪府");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 4);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected9 = $elements.length;
        if (countSelected9 < 4) {
          const time = new Date();
          const timeFailed = `${time.getFullYear()}${
            time.getMonth() + 1
          }${time.getDate()} - ${time.toLocaleTimeString()}`;
          cy.screenshot(`大阪府_${timeFailed}`);
          
        }
      });
    cy.get("#area_select").select("愛知県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 2);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected10 = $elements.length;
        if (countSelected10 < 2) {
          const time = new Date();
          const timeFailed = `${time.getFullYear()}${
            time.getMonth() + 1
          }${time.getDate()} - ${time.toLocaleTimeString()}`;
          cy.screenshot(`愛知県_${timeFailed}`);
    
        }
       
      });
    cy.get("#area_select").select("福岡県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 1);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected11 = $elements.length;
        if (countSelected11 < 1) {
          const time = new Date();
          const timeFailed = `${time.getFullYear()}${
            time.getMonth() + 1
          }${time.getDate()} - ${time.toLocaleTimeString()}`;
          cy.screenshot(`福岡県_${timeFailed}`);
    
        }
        
      });
  });
  after(() => {
    const time = new Date();
    const strtime = `${time.getFullYear()} ${
      time.getMonth() + 1
    } ${time.getDate()} - ${time.toLocaleTimeString()}`;
    cy.writeFile(`data/${strtime}.json`, {
      countSelected1,
      countSelected2,
      countSelected3,
      countSelected4,
      countSelected5,
      countSelected6,
      countSelected7,
      countSelected8,
      countSelected9,
      countSelected10,
      countSelected11,
    });
  });
});
