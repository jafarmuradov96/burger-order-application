import '../burgers/BurgerItemForm.css';
import Input from '../UI/Input';

const BurgerItemForm = ({ value, onChange, onSubmit}) => {



  return (
    <form className='burger-item-form' onSubmit = {onSubmit}>
      <Input
        input={{type: 'number', min: '1', max: '5', step: '1'} }
        label='Amount'
        onChange = {onChange}
        value={value}
      />
      <button>+ADD</button>
    </form>
  )
}

export default BurgerItemForm

//defaultValue: '1',