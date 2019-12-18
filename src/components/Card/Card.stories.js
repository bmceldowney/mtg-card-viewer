import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Card from "./Card";

export const props = {
  name: "Academy Researchers",
  artist: "Stephen Daniele",
  setName: "Tenth Edition",
  originalType: "Creature - Human Wizard",
  imageUrl:
    "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=132072&type=card",
  state: "",
  id: 0
};

export const actions = {
  onHover: action("onHover")
};

storiesOf("Card", module)
  .add("default", () => (
    <div style={{ display: "flex" }}>
      <Card props={props} {...actions} />
    </div>
  ))
  .add("hovered", () => (
    <div style={{ display: "flex" }}>
      <Card props={{ ...props, state: "hover" }} {...actions} />
    </div>
  ))
  .add("placeholder", () => (
    <div style={{ display: "flex" }}>
      <Card props={{ ...props, imageUrl: "placeholder" }} {...actions} />
    </div>
  ))
  .add("not available", () => (
    <div style={{ display: "flex" }}>
      <Card props={{ ...props, imageUrl: "" }} {...actions} />
    </div>
  ));
