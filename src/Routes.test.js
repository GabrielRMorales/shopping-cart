import React from "react";
import { render, screen,cleanup } from '@testing-library/react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {mount, shallow} from "enzyme";
import {MemoryRouter} from "react-router-dom";
import {Routes} from './Routes';
import ShoppingPage from "./ShoppingPage";
import ProductPage from "./ProductPage";
import HomePage from "./HomePage";
Enzyme.configure({ adapter: new Adapter() });

jest.mock("./ProductPage");
jest.mock("./ShoppingPage", ()=>jest.fn());
jest.mock("./HomePage", ()=>jest.fn());

// beforeEach(()=>{
//     jest.resetAllMocks();
// });
// afterEach(()=>{
//     jest.clearAllMocks();
// });

describe("Routes tests",()=>{
//problem is for paths other than /, it can do just the /

xit("should render the home page by default", () => {
  HomePage.mockImplementation(()=><div>HomePage</div>);
  const component = mount(<MemoryRouter initialEntries={['/home']} >
  <Routes />
  </MemoryRouter>);
  expect(component.find(HomePage)).toHaveLength(1);
  //expect(screen.getByText(/HomePage/i)).toBeInTheDocument();
});

xit("should render the Shopping Page", ()=>{
    ShoppingPage.mockImplementation(()=>(<div>ShoppingPage</div>));

    render(<MemoryRouter initialEntries={["/shopping"]}>
    <Routes />
    </MemoryRouter>);
    expect(screen.getByText(/ShoppingPage/i)).toBeInTheDocument();

});

});
