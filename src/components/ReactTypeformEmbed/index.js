import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as typeformEmbed from '@typeform/embed';
import './ReactTypeformEmbed.css';

class ReactTypeformEmbed extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
		const { url, hideHeaders, hideFooter, opacity, buttonText } = this.props;
    const elm = this.refs.typeform;
		const options = {
			hideHeaders,
			hideFooter,
			opacity,
			buttonText
		}

		// Load Typeform embed widget
    typeformEmbed.makeWidget(elm, url, options);
  }

  render() {
    return <div className="ReactTypeformEmbed" ref="typeform" style={this.props.style}/>;
  }
}

ReactTypeformEmbed.propTypes = {
  url: PropTypes.string.isRequired,
	hideHeaders: PropTypes.bool,
	hideFooter: PropTypes.bool,
	opacity: PropTypes.number,
	buttonText: PropTypes.string,
	style: PropTypes.object
};

// Most default values taken from official Typeform docs
// https://developer.typeform.com/embed/modes/
ReactTypeformEmbed.defaultProps = {
	url: '',
	hideHeaders: false,
	hideFooter: false,
	opacity: 100,
	buttonText: 'Start',
	style: {}
};

export default ReactTypeformEmbed;
