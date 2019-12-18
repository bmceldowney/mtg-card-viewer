import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import PagedList from "./PagedList";
import { Card } from "../";

export const props = {
  loadingFromApi: false,
  lastPageFetched: 0,
  totalItemCount: 300,
  itemsAllIds: [],
  itemsByIds: {}
};

for (let id = 0; id < 20; id++) {
  props.itemsAllIds.push(id);
  props.itemsByIds[id] = { id };
}

export const actions = {
  fetchItemsForPage: action("fetchItemsForPage")
};

storiesOf("PagedList", module).add("default", () => (
  <div style={{ display: "flex", height: "500px" }}>
    <PagedList props={props} {...actions} Item={Card} />
  </div>
));
