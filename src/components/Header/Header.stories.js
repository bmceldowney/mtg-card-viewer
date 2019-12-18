import React from "react";
import { storiesOf } from "@storybook/react";

import Header from "./Header";

export const props = {
  title: "MtG View test",
  loadingFromApi: false
};

storiesOf("Header", module)
  .add("default", () => (
    <div className="app red">
      <Header props={props} />
    </div>
  ))
  .add("loading", () => (
    <div className="app red">
      <Header props={{ ...props, loadingFromApi: true }} />
    </div>
  ));
