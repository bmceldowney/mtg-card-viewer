import React, { useEffect, useRef, useState, useCallback } from "react";
import "./PagedList.css";

/**
 * The component responsible for laying out and displaying our items
 *
 * In a production application I would look to bring in a virtualized
 * component, similar to react-window
 *
 * @param {Object} propsObject - an object containing a props object with the following properties:
 *         {Integer} lastPageFetched - the number of the last page that was fetched from the API
 *         {Boolean} loadingFromApi - a boolean indicating if an API request is currently in progress
 *         {Boolean} hasNextPage - a boolean tracking whether there are any remaning pages to load from the API
 * @param {Function} fetchItemsForPage - callback to invoke when loading items for a specific page from the API
 */
function PagedList({ children, pagedList, fetchItemsForPage }) {
  const { lastPageFetched, loadingFromApi, hasNextPage } = pagedList;
  const ref = useRef(); // ref so we can hook up a scroll event listener
  const [pageToFetch, setPageToFetch] = useState(1); // track the next page to fetch

  /**
   * A function that monitors the scroll position of the list to trigger
   * loading of more items from the API when the user nears the bottom
   * @param {Event} event - the DOM scroll event
   */
  const scrollHandler = useCallback(
    event => {
      const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
      const lowerBound = scrollTop + clientHeight;
      const distanceToEnd = scrollHeight - lowerBound;
      // TODO: instead of using an arbitrary number, do some calculations to
      // determine the actual page height based on row length and find the
      // optimal threshold in pixels
      const loadThreshold = 1500;

      const withinLoadThreshold = distanceToEnd < loadThreshold;
      const alreadyLoadedPage = pageToFetch > lastPageFetched;
      const loadedAllCards = !hasNextPage;
      const appIsLoading = loadingFromApi;

      if (
        withinLoadThreshold &&
        !alreadyLoadedPage &&
        !loadedAllCards &&
        !appIsLoading
      ) {
        setPageToFetch(pageToFetch + 1);
      }
    },
    [pageToFetch, lastPageFetched, loadingFromApi, hasNextPage]
  );

  /**
   * When the component mounts, listen to the scroll event
   * Make sure to clean up on unmount
   */
  useEffect(() => {
    const component = ref.current;
    component.addEventListener("scroll", scrollHandler);

    return () => component.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  /**
   * When the pageToFetch state property is updated, fire off the action to
   * get items for the next page
   */
  useEffect(() => {
    fetchItemsForPage(pageToFetch);
  }, [pageToFetch, fetchItemsForPage]);

  return (
    <div ref={ref} className="paged-list">
      {children}
    </div>
  );
}

export default PagedList;
