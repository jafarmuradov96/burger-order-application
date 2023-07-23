import '../UI/Modal.css';

const Modal = ({children, openIsModal}) => {


  if(!openIsModal) {
    return null
  }

  return (
    <div className='modal'>
        <div className='modal-content'>
            {children}
        </div>
    </div>
  )
}

export default Modal