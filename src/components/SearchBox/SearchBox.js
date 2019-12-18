import React, { useState } from "react";
import { Popover, PopoverBody } from "reactstrap";
import "./SearchBox.css";

function SearchBox({
  props: { loadingFromApi, currentSearchCriteria },
  setSearchCriteria
}) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const searchFields = Object.keys(currentSearchCriteria);

  const searchInputs = searchFields.map(field => {
    return (
      <input
        data-fieldname={field}
        key={field}
        disabled={loadingFromApi}
        type="text"
        placeholder={`Search by card ${field}`}
        value={currentSearchCriteria[field]}
        onChange={handleChange}
      />
    );
  });

  function handleChange(event) {
    const fieldName = event.target.dataset.fieldname;
    const value = event.target.value;

    setSearchCriteria({ fieldName, value });
  }

  return (
    <div id="search-box" className="search-box">
      <div className="toggle"></div>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="search-box"
        toggle={toggle}
      >
        <PopoverBody>
          <div className="search-inputs">{searchInputs}</div>
        </PopoverBody>
      </Popover>
    </div>
  );
}

export default SearchBox;
