import Student from "./Student"

function App() {

 //In the return the values are passed to child component from parent component.
 /* String - passed with ""
 Number - passed within {}
 Boolean - passed within {} which will be used in child component with conditional operator
*/   

return(
<>
<Student name="Saba" age={32} isStudent={false}/>
    <Student name="Bavi" age={27} isStudent={true}/>
    <Student name="Nags" age={13} isStudent={true}/>
    <Student name="Sank" age={72} isStudent={false}/>
    <Student/>
</>
 )
}

export default App
