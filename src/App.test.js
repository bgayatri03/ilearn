import { mount } from "enzyme";
//import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  let wrapper = null;
  const component = (path) => {
    return mount(<App />);
  };

  beforeEach(() => {
    wrapper = component();
  });

  it("is Rendered", () => {
    const app = wrapper.find({ "data-testid": "App" });
    expect(app.length).toBe(1);
  });
});
