import { mount, shallow } from "enzyme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SnakesAndLaddersGridWithRamda from "./SnakesAndLaddersGridWithRamda";
import { MemoryRouter } from "react-router-dom";
import React, { useState } from "react";

describe("snakesAndLaddersGrid Component", () => {
  const component = (prop) => {
    return mount(<SnakesAndLaddersGridWithRamda {...prop} />);
  };

  let wrapper = null;

  beforeEach(() => {
    wrapper = component();
  });

  it("is rendered", () => {
    const snakesAndLaddersGrid = wrapper.find({
      "data-testid": "box-row",
    });
    expect(snakesAndLaddersGrid.length).toBe(10);
  });

  it("changes token position", () => {
    const prop_1 = {
      myPosition: 4,
    };
    wrapper = component(prop_1);
    const box = wrapper.find({
      id: prop_1.myPosition,
    });
    expect(box.length).toBe(1);
  });
});
