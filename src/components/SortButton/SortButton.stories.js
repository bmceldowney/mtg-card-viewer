import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SortButton from "./SortButton";

const props = {
  isDescending: true
};

const actions = {
  changeSort: action("changeSort")
};

storiesOf("SortButton", module)
  .add("default", () => (
    <SortButton props={{ ...props }} {...actions}></SortButton>
  ))
  .add("reverse", () => (
    <SortButton
      props={{ ...props, isDescending: false }}
      {...actions}
    ></SortButton>
  ));
