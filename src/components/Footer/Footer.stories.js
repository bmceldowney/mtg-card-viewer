import React from "react";
import { storiesOf } from "@storybook/react";

import Footer from "./Footer";

export const props = {
  totalCardCount: 34,
  loadedCardCount: 20
};

storiesOf("Footer", module).add("default", () => <Footer props={props} />);
