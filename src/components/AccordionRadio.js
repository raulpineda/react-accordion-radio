require('normalize.css/normalize.css');
require('styles/AccordionRadio.scss');

import React from 'react';

class AccordionRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValues: []
    };
    this.handleUpdateSelection = e => {
      const { selectedValues } = this.state;
      const { isMultiple } = this.props;
      const value = e.target.value;
      let newValues = [];

      if (isMultiple) {
        newValues = e.target.checked
          ? selectedValues.filter(v => v !== value)
          : selectedValues.concat(value);
      } else {
        newValues = [value];
      }

      this.setState({
        selectedValues: newValues
      });
    };
  }
  componentDidMount() {}
  render() {
    const { children, onChangeHandler, ...rest } = this.props;
    const { selectedValues } = this.state;
    return (
      <div className="accordion-radio">
        {React.Children
          .toArray(children)
          .filter(c => c.type.name === 'AccordionRadioItem')
          .map((c, i) => {
            return React.cloneElement(c, {
              key: i,
              handleUpdateSelection: this.handleUpdateSelection,
              selectedValues: selectedValues,
              ...rest
            });
          })}
      </div>
    );
  }
}

AccordionRadio.defaultProps = {};

export default AccordionRadio;
