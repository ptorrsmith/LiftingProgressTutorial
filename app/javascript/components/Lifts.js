import React from "react"
import PropTypes from "prop-types"
class Lifts extends React.Component {
  render () {
    return (
      <React.Fragment>
        {/*Greeting: {this.props.greeting}*/}
        Data baby: {this.props.data[0].liftname}
      </React.Fragment>
    );
  }
}

Lifts.propTypes = {
  greeting: PropTypes.string
};
export default Lifts
