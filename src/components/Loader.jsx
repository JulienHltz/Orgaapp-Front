import './_loader.scss'
import logomini from '../assets/images/logomini.jpg'

const Loader = () => {
  return (
    <>
      <div className='container'>
        <div className='square'>
          <img src={logomini} alt='logomini' />
        </div>
      </div>
    </>
  )
}

export default Loader
