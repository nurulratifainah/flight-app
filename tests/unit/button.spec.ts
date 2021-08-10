import { expect } from "chai";
import { createLocalVue, mount } from "@vue/test-utils";
import BaseButton from "@/components/atoms/Input/Button.vue";
import Vuetify from "vuetify";
// import sinon from "sinon";

import "./setup.js";

describe("Button.vue", () => {
  let vuetify: any;

  const localVue = createLocalVue();

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const mountFunction = (options: any) => {
    return mount(BaseButton, {
      localVue,
      vuetify,
      ...options,
    });
  };

  it("should render properly", () => {
    const defaultButton = mountFunction({});
    expect(defaultButton.exists()).to.be.true;
    expect(defaultButton.classes()).to.contain("v-btn");
  });

  it("renders button based on passes props", () => {
    const wrapper = mountFunction({
      propsData: { color: "primary" },
    });
    expect(wrapper.classes()).to.contain("primary");
  });

  /*it("should call on click handler", function () {
    const clickHandler = sinon.stub();
    const myButton = mountFunction({
      context: {
        on: {
          click: clickHandler,
        },
      },
    });
    myButton.trigger("click");
    expect(
      clickHandler,
      "Click handler has not been called"
    ).to.have.been.called;
  });*/
});
