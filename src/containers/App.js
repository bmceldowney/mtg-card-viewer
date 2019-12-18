import React, { useEffect } from "react";
import { Header, PagedList, Footer, Card } from "../components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchCards from "../actions/fetchCards";
import searchCards from "../actions/searchCards";
import sortCards from "../actions/sortCards";
import "./App.css";

const mapStateToProps = state => {
  const header = { ...state.app };
  const pagedList = {
    lastPageFetched: state.app.lastPageFetched,
    loadingFromApi: state.app.loadingFromApi,
    hasNextPage: state.cards.allIds.length < state.app.totalCardCount
  };
  const footer = {
    ...state.app,
    loadedCardCount: Object.keys(state.cards.byIds).length
  };

  return {
    header,
    footer,
    pagedList,
    ...state.cards
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchItemsForPage: pageNumber => fetchCards(pageNumber),
      setSearchCriteria: searchCriteria => searchCards(searchCriteria),
      changeSort: sortField => sortCards(sortField)
    },
    dispatch
  );

function App({
  header,
  footer,
  pagedList,
  allIds,
  byIds,
  fetchItemsForPage,
  setSearchCriteria,
  changeSort
}) {
  const cards = allIds.map(itemId => {
    const item = byIds[itemId];

    return <Card props={item} key={item.id}></Card>;
  });

  useEffect(() => console.log("App redrawing!"));

  return (
    <div className="app red">
      <Header
        props={header}
        setSearchCriteria={setSearchCriteria}
        changeSort={changeSort}
      ></Header>
      <PagedList pagedList={pagedList} fetchItemsForPage={fetchItemsForPage}>
        {cards}
      </PagedList>
      <Footer props={footer}></Footer>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
