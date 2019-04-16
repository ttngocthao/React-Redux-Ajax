import React from "react";
import { connect } from "react-redux";
import Api from "./api";

const RepoSearch = props => {
  return (
    <div>
      <form
        onSubmit={e => {
          props.handleSubmit(e, props.inputValue);
        }}
      >
        <input value={props.inputValue} onChange={props.handleInputChange} />
      </form>
      <ul>
        {props.repos !== "" &&
          props.repos.map((item, key) => {
            return (
              <li key={item.id}>
                <a href={item.html_url} target="blank">
                  {item.name}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { inputValue: state.searchInputValue, repos: state.repos };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: e => {
      const action = { type: "SEARCH_INPUT_CHANGE", textValue: e.target.value };
      dispatch(action);
    },
    handleSubmit: (e, query) => {
      e.preventDefault();
      //move these below to a seperate file
      // let query = "react";
      // fetch(`https://api.github.com/search/repositories?q=${query}`)
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(data => {
      //     console.log(data);
      //     dispatch({ type: "SET_REPOS", repos: data.items });
      //   });
      Api.getRepos(dispatch, query);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoSearch);
