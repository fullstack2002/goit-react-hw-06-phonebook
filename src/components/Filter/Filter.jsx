import { nanoid } from "nanoid";
import { FilterTitle, FilterInput } from "./Filter.styled";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  
  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  }
  const filterId = nanoid();

   return (<div>
    <FilterTitle htmlFor={filterId}>Find contacts by name</FilterTitle>
    <FilterInput
      id={filterId}
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange}
      required
      />
  </div>);
};

export default Filter;