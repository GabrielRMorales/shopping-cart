import React from "react";
import {within, render, screen} from "@testing-library/react";
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
    it("should show its total number of contained items",()=>{
        let cart = screen.getByRole("shopping-cart");
        expect(within(cart).getByRole("total-items")).toBeInTheDocument();
    });
})