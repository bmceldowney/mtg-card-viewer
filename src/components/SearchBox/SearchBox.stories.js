import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SearchBox from "./SearchBox";

const props = {
  loadingFromApi: false,
  currentSearchCriteria: {
    name: ""
  }
};

const actions = {
  setSearchCriteria: action("setSearchCriteria")
};

storiesOf("SearchBox", module)
  .add("default", () => (
    <SearchBox props={{ ...props }} {...actions}></SearchBox>
  ))
  .add("loading", () => (
    <SearchBox
      props={{ ...props, loadingFromApi: true }}
      {...actions}
    ></SearchBox>
  ));
