import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import SnakesAndLaddersGameNew from "./SnakesAndLaddersGameNew";
import { Modal } from "@mui/material";

const component = (prop) => {
  return mount(<SnakesAndLaddersGameNew {...prop} />);
};

describe("SnakesAndLaddersGameNew Component", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = component();
  });

  it("is rendered", () => {
    const snakesAndLadder = wrapper.find(".snakesAndLaddersGameContainer");
    expect(snakesAndLadder.length).toBe(1);
  });

  it("checks if roll dice roll button has correct initial props", () => {
    const button = wrapper.find("#rollButton");
    expect(button.length).toBe(1);
    // expect(modal.prop("open")).toBe(false)
    expect(typeof button.prop("onClick")).toBe("function");
  });
});
