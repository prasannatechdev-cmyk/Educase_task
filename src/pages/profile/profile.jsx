import "./profile.css";

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <h3>Account Settings</h3>
        </div>

        <div className="profile-content">
          <div className="profile-top">
            <div className="image-wrapper">
              <img
                src="https://i.pravatar.cc/150?img=47"
                alt="profile"
                className="profile-image"
              />

              <div className="camera-icon">📷</div>
            </div>

            <div className="profile-details">
              <h4>Marry Doe</h4>
              <p>Marrydoe@gmail.com</p>
            </div>
          </div>

          <div className="description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </div>
        </div>

        <div className="bottom-divider"></div>

        <div className="bottom-divider2"></div>
      </div>
    </div>
  );
}
