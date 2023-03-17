import { mount } from "enzyme";
import Learn from "./learn";

const component = (prop) => {
  return mount(<Learn {...prop} />);
};

describe("Learn Component", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = component();
  });

  it("is rendered", () => {
    const learn = wrapper.find({ "data-testid": "learn" });
    expect(learn.length).toBe(1);
  });
});
