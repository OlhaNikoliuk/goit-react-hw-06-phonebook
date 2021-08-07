// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { FilterInput, Label } from './Filter.styled';
import * as contactsActions from '../../redux/contacts/contacts-actions';

function Filter(/*{ value, onChange }*/) {
  const value = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  const onFilterChange = (e)=>{
    dispatch(contactsActions.changeFilter(e.currentTarget.value))
  }
  return (
    <div>
      <Label>
        <FaSearch size='14'></FaSearch>Find contacts by name
        <FilterInput
          type='text'
          name='filter'
          title='Введите запрос для поиска'
          required
          onChange={onFilterChange}
          value={value}
          autoComplete='off'
        />
      </Label>
    </div>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func,
// };

export default Filter

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (e) =>
//     dispatch(contactsActions.changeFilter(e.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
