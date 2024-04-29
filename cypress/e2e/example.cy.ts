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
      });
    cy.get("#area_select").select("北海道");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 1);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected2 = $elements.length;
      });
    cy.get("#area_select").select("東京23区");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 6);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected3 = $elements.length;
      });
    cy.get("#area_select").select("東京23区外");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 3);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected4 = $elements.length;
      });
    cy.get("#area_select").select("神奈川県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 2);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected5 = $elements.length;
      });
    cy.get("#area_select").select("神奈川県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 2);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected6 = $elements.length;
      });
    cy.get("#area_select").select("埼玉県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 2);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected7 = $elements.length;
      });
    cy.get("#area_select").select("千葉県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 4);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected8 = $elements.length;
      });
    cy.get("#area_select").select("大阪府");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 4);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected9 = $elements.length;
      });
    cy.get("#area_select").select("愛知県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 2);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected10 = $elements.length;
      });
    cy.get("#area_select").select("福岡県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 1);
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .then(($elements) => {
        countSelected11 = $elements.length;
      });
  });
  after(() => {
    const time = new Date().toLocaleString();
    cy.writeFile(`data/${time}.json`, {
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
