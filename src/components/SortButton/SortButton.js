import React, { useState } from "react";
import "./SortButton.css";
import { Button, Popover, PopoverBody } from "reactstrap";

function SortButton({ props: { loadingFromApi }, changeSort }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const sortFields = ["name", "color", "rarity", "artist"];

  function handleClick(event) {
    const sortField = event.target.textContent;
    changeSort(sortField);
  }

  const sortList = sortFields.map(field => {
    return (
      <Button
        disabled={loadingFromApi}
        key={field}
        onClick={handleClick}
        className="sort-field"
      >
        {field}
      </Button>
    );
  });

  return (
    <div>
      <div id="sort-button" className="sort-button"></div>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="sort-button"
        toggle={toggle}
      >
        <PopoverBody>
          <div className="sort-selector">{sortList}</div>
        </PopoverBody>
      </Popover>
    </div>
  );
}

export default SortButton;
