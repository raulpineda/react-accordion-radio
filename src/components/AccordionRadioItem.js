import React from 'react';

const AccordionRadioItem = ({
  label,
  selectMultiple,
  handleUpdateSelection,
  name,
  selectedValues,
  value,
  children
}) => {
  let classNames = 'accordion-radio__item__input';
  if (selectMultiple) {
    classNames += 'accordion-radio__item__input--multiple';
  }
  const isSelected = selectedValues.includes(value);
  return (
    <div className="accordion-radio__item">
      <label
        className="accordion-radio__item__label"
        onClick={handleUpdateSelection}>
        <input
          className={classNames}
          type={selectMultiple ? 'checkbox' : 'radio'}
          name={name}
          defaultChecked={isSelected}
          value={value}
        />
        <span className="accordion-radio__item__label__value">
          {React.Children.map(label, (child, index) =>
            React.cloneElement(child, { key: index })
          )}
        </span>
      </label>
      <div
        className={`accordion-radio__item__content-wrapper ${isSelected
          ? 'accordion-radio__item__content-wrapper--expanded'
          : null}`}>
        {React.Children
          .toArray(children)
          .filter(c => c.type.name === 'AccordionRadioContent')}
      </div>
    </div>
  );
};

export default AccordionRadioItem;
