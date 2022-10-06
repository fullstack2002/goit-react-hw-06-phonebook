import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { FilterTitle, FilterInput } from "./Filter.styled";

const Filter = ({ value, onChange }) => {
  const filterId = nanoid();
  return (
    <div>
      <FilterTitle htmlFor={filterId}>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        htmlFor={filterId}
        required
      />
    </div>
  );
};

  Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
export default Filter;