import "./ProfileCard.css";

const ProfileCard = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <h2>
          <strong>Name: {props.personName}</strong>
        </h2>
        <h3>
          Age: <em>{props.age}</em>
        </h3>
        <h4>
          Biography: <em>{props.bio}</em>
        </h4>
      </div>
    </div>
  );
};

export default ProfileCard;
