import profile from './assets/profile.jpg'
function Card(){
    return(
        <div className="card">
        <img className="profile" src={profile} alt="profilePicture"></img>
        <h2 className="title">Bavishyaa Ramani</h2>
        <p className="para">I am Software Engineer and a passionate web developer</p>
    </div>
    );
}

export default Card;