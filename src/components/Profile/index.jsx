const Profile = ({ name, age, children }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{age}</span>
      {children}
    </div>
  );
};

// fragment

export default Profile;
