import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { setFailure, setSuccess, getCharacters } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <p> fetching stars... </p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    characters: state.characters,
    error: state.error
  }
}
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    setSuccess,
    setFailure,
    getCharacters
  }
)(CharacterListView);
