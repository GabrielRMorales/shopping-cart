import React from "react";
import {within, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingPage from "./ShoppingPage";
import ShoppingCart from "./ShoppingCart";

beforeEach(()=>{
    render(<ShoppingPage />);
});


describe("the page components",()=>{
    it("should render the Shopping Page",()=>{
        expect(screen.getByRole("shopping-page")).toBeInTheDocument();
    });

    it("should render the Shopping Cart Page",()=>{
        expect(screen.getByRole("shopping-cart")).toBeInTheDocument();
    });

    it("should render the Product Page", ()=>{
        expect(screen.getByRole("product-page")).toBeInTheDocument();
    });

    it("should show four products", ()=>{
        expect(screen.queryAllByRole("product")).not.toBeNull();
        expect(screen.getAllByRole("product")).toHaveLength(4);
    });
});

describe("the ShoppingCart component",()=>{
    it("should show a number",()=>{
        let cart = screen.getByRole("shopping-cart");
        expect(within(cart).getByRole("total-items")).toBeInTheDocument();
        expect(within(cart).getByText("0")).toBeInTheDocument();
    });

    it("increases when a user clicks the Add to Cart button", async ()=>{
        let cart = screen.getByRole("shopping-cart");
        let firstProduct = screen.getAllByRole("product")[0];
        let addBtn = within(firstProduct).getByRole("add-to-cart");
        userEvent.click(within(firstProduct).getByRole("increase"));
        userEvent.click(addBtn);
        expect(within(cart).getByText("1")).toBeInTheDocument();

    });

});

describe("the Product component",()=>{
    let firstProduct;
       beforeEach(()=>{
         firstProduct = screen.getAllByRole("product")[0];
       })
    it("has a + Quantity button", ()=>{
       
        expect(within(firstProduct).getByRole("increase")).toBeInTheDocument();
        expect(screen.getAllByText("+")).not.toBeNull();
        expect(screen.getAllByText("-")).toHaveLength(4);
    });

   it("has a - Quantity button", ()=>{
       
       expect(within(firstProduct).getByRole("decrease")).toBeInTheDocument();
       expect(screen.getAllByText("-")).not.toBeNull();
       expect(screen.getAllByText("-")).toHaveLength(4);
    });

    it("should have an Add to Cart button", ()=>{
       expect(within(firstProduct).getByRole("add-to-cart")).toBeInTheDocument();
      expect(screen.getAllByText("Add to Cart")).toHaveLength(4);
    });

    it("shows a number, starting at 0", ()=>{
        expect(within(firstProduct).getByText("0")).toBeInTheDocument();
    })

});

describe("the Product's display number", ()=>{
    
  it("should increase when the + button is clicked", async ()=>{
      let firstProduct = screen.getAllByRole("product")[0];
      let plusBtn = within(firstProduct).getByRole("increase");
      userEvent.click(plusBtn);
      expect(await within(firstProduct).getByText("1")).toBeInTheDocument();
      userEvent.click(plusBtn);
      expect(await within(firstProduct).getByText("2")).toBeInTheDocument();
  });

  it("should decrease when the - button is clicked", async ()=>{
      let firstProduct = screen.getAllByRole("product")[0];
      let minusBtn = within(firstProduct).getByRole("decrease");
      let plusBtn = within(firstProduct).getByRole("increase");
      userEvent.click(plusBtn);
      userEvent.click(minusBtn);
      expect(await within(firstProduct).getByText("0")).toBeInTheDocument();

  });
  
  it("should not go below zero", async ()=>{
      let firstProduct = screen.getAllByRole("product")[0];
      let minusBtn = within(firstProduct).getByRole("decrease");
      let plusBtn = within(firstProduct).getByRole("increase");
        userEvent.click(minusBtn);
        userEvent.click(minusBtn);
        expect(await within(firstProduct).getByText("0")).toBeInTheDocument();

   });

});
