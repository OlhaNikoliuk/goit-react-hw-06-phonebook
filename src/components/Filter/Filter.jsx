import PropTypes from 'prop-types';
import {connect } from 'react-redux'
import {FaSearch} from 'react-icons/fa'
import { FilterInput, Label } from "./Filter.styled";
import contactsActions from '../../redux/contacts/contacts-actions';



function Filter({ value, onChange }) {
  return (
    <div>
      <Label><FaSearch size='14'></FaSearch>Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        title="Введите запрос для поиска"
        required
        onChange={onChange}
        value={value}
      /></Label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

const mapStateToProps = state =>({
  value: state.contacts.filter
})

const mapDispatchToProps = dispatch=>({
  onChange: (e)=>(dispatch(contactsActions.changeFilter(e.currentTarget.value)))
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
