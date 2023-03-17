import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import LearningCategories from "./learningCategories";
import { useState } from "react";

const component = () => {
  return mount(
    <MemoryRouter>
      <LearningCategories />;
    </MemoryRouter>
  );
};

describe("Learning Categories Component", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = component();
  });

  it("is Rendered", () => {
    const learningCategories = wrapper.find({
      "data-testid": "learnCategories",
    });
    expect(learningCategories.length).toBe(1);
  });

  it("shows categories", () => {
    // let showCategories = true;
    const showCat = wrapper.find({ "data-testid": "showCatWrap" });
    expect(showCat.length).toBe(1);
  });
});
