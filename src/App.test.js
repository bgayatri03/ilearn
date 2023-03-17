import { mount } from "enzyme";
//import { MemoryRouter } from "react-router-dom";
import HomePage from "./HomePage/homePage";
import App from "./App";
import LearningCategories from "./Learn/learningCategories";
import StartGame from "./SnakesAndLadders/StartGame";
import Test from "./Test/Test";
import Dashboard from "./Dashboard/dashboard";

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

  it("navigates to home correctly", () => {
    wrapper = component("/");
    expect(wrapper.find(HomePage)).toHaveLength(1);
    expect(wrapper.find(LearningCategories)).toHaveLength(0);
    expect(wrapper.find(StartGame)).toHaveLength(0);
    expect(wrapper.find(Test)).toHaveLength(0);
    expect(wrapper.find(Dashboard)).toHaveLength(0);
  });
});
