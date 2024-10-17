//props : read-only properties that are shared btw components. 
//Parent component can send data to child component.
// Here, app.component is parent and Student.component is child.

/* Prop type - It is used to check if the passed value is of correct type
 
 Default Props - When no value is passed, default value is assigned
*/

import propTypes from 'prop-types';

function Student(props){

    Student.propTypes = {
        name: propTypes.string,
        age: propTypes.number,
        isStudent: propTypes.bool,
    }

    Student.defaultProps = {
        name: "Guest",
        age: 0,
        isStudent: false,
    }

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

    
}

export default Student;