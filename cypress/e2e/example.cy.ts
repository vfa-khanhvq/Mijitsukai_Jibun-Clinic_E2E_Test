// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
  });

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
    cy.get("#area_select").select("北海道");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 1);
    cy.get("#area_select").select("東京23区");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 6);
    cy.get("#area_select").select("東京23区外");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 3);
    cy.get("#area_select").select("神奈川県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 2);
    cy.get("#area_select").select("神奈川県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 2);
    cy.get("#area_select").select("埼玉県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 2);
    cy.get("#area_select").select("千葉県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 4);
    cy.get("#area_select").select("大阪府");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 4);
    cy.get("#area_select").select("愛知県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 2);
    cy.get("#area_select").select("福岡県");
    cy.get("#store_select > div.block-body.store_list")
      .find("div")
      .should("have.length", 1);
  });
});
