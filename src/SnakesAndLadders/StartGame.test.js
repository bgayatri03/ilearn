import { mount, shallow } from "enzyme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartGame from "./StartGame";
import { MemoryRouter } from "react-router-dom";
import React, { useState } from "react";
// import { shallow } from "enzyme";

describe("StartGame Component", () => {
  const component = () => {
    return mount(
      <MemoryRouter>
        <StartGame />
      </MemoryRouter>
    );
  };
  let wrapper = null;

  beforeEach(() => {
    wrapper = component();
  });

  it("is rendered", () => {
    const startGame = wrapper.find({ "data-testid": "startGameContainer" });
    expect(startGame.length).toBe(1);
  });

  it("is rendered with variant 1", () => {
    const hideThemeScreen = true;
    const element = wrapper.find("#startGameButton");
    expect(element.length).toBe(1);
  });

  it("if function is called or not", () => {
    const initGame = jest.fn();
    const wrapper = shallow(<button onClick={initGame}></button>);

    wrapper.find("button").simulate("click");
    expect(initGame).toBeCalled();
  });
});
