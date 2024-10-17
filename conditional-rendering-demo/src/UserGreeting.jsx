// conditional rendering - Allows you to render content in an application based on certain condition. (Show, Hide or Change Components)

function UserGreeting(props){
    const welcomeMsg1 = <h2 className="user">Welcome {props.userName}!</h2>
    const welcomeMsg2 = <h2 className="guest"> Welcome Guest!</h2>
    return(
        props.isLoggedIn ? welcomeMsg1 : welcomeMsg2
    );
}

export default UserGreeting