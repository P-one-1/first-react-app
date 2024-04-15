import Gallery from "./Gallery.js";
import Profile from "./Profile.js";

function formatDate(date) {
  return date.toLocaleDateString();
}

export default function App(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
      <Profile />,
      <Gallery />
    </div>
  );
}

// export default App;
