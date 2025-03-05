const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio || "No bio available."}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Repositries: {user.public_repos}</p>
      <p>🏢 {user.company || "No company added"}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
