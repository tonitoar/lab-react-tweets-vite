import ProfileImage from "./ProfileImage.jsx"; 
import User from "./User.jsx";
import Timestamps from "./Timestamps.jsx";
import Message from "./Message.jsx";



function Tweet(props) {
  
  //console.log("----------------------", props) 

// linkejem el array amb el props, amb el console.log veiem que es un objecte amb una propietat "tweet". 
// dintre d'aquesta hi ha un objecte amb 3 propietats: user( amb 3 dins), timestamp i message. 

  return (
    // <div className="tweet">
    //   <img
    //     src={props.tweet.user.image}
    //     className="profile"
    //     alt="profile"
    //   />

    //   <div className="body">
    //     <div className="top">
    //       <span className="user">
    //         <span className="name">{props.tweet.user.name}</span>
    //         <span className="handle">{props.tweet.user.handle}</span>
    //       </span>

    //       <span className="timestamp">{props.tweet.timestamp}</span>
    //     </div>

    //     <p className="message">
    //       {props.tweet.message}
    //     </p>

    //     <div className="actions">
    //       {/* Font Awesome icons */}
    //       <i className="far fa-comment"></i>
    //       <i className="fas fa-retweet"></i>
    //       <i className="far fa-heart"></i>
    //       <i className="fas fa-share"></i>
    //     </div>
    //   </div>

    //   <i className="fas fa-ellipsis-h"></i>
    // </div>
    <ProfileImage image={IMAGE_URL} />
  );
}

export default Tweet;
