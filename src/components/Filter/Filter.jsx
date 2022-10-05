import PropTypes from "prop-types";
import { FilterTitle, FilterInput } from "./Filter.styled";

const Filter = ({ handleFilter }) => {
  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        onChange={handleFilter}
      />
    </div>
  );
};

  Filter.propTypes = {
    handleFilter: PropTypes.func.isRequired,
};
  
export default Filter;