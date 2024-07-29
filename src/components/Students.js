import Comp from './Comp'
import propTypes from 'prop-types'

const Student =(prop) => {
    return(
        <>
        <h1>{prop.name}</h1>
        <h1>{prop.age}</h1>
        <Comp name={prop.name}/>
        </>
    )
}

Student.propTypes={
    name: propTypes.string,
    age: propTypes.number

}

export default Student