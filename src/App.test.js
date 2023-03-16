import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  let wrapper = null;
  const component = (path) => {
    return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
        <App />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    wrapper = component();
  });
});
