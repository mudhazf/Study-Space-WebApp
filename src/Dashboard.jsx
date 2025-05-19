import './Dashboard.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Dashboard = () => {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState({
    name: 'Alex Hartley',
    email: 'abc@example.com',
    profileImage: '', // You can change to your own image URL
  });

  useEffect(() => {
    import('aos').then(AOS => {
      AOS.init();
    });

    const mockRooms = [
      { id: 1, name: 'Team Meeting', type: 'Created' },
      { id: 2, name: 'Study Group', type: 'Joined' },
    ];
    setRooms(mockRooms);
  }, []);

  const handleCreateRoom = () => {
    alert('Create Room functionality here.');
  };

  const handleJoinRoom = () => {
    const code = prompt('Enter Room Code or Link:');
    if (code) {
      alert(`Joining room with code/link: ${code}`);
    }
  };

  const handleEditProfile = () => {
    alert('Edit Profile functionality here.');
  };

  const createdCount = rooms.filter(r => r.type === 'Created').length;
  const joinedCount = rooms.filter(r => r.type === 'Joined').length;

  return (
    <div className="dashboard-page">
      <div className="text-center mb-4">
        <h2>WELCOME BACK!</h2>
        <p className="text-muted">Your dashboard is here to help you lead, create, and connect.</p>
      </div>

      <div className="dashboard-content d-flex flex-wrap gap-4 justify-content-center">
        {/* Profile Card */}
        <div className="profile-wrapper">
          <div className="card profile-card text-center">
            <img
  src={
    user.profileImage
      ? user.profileImage
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=2d465e&color=fff`
  }
  alt="Profile"
  className="profile-image mb-3"
/>

            
            <h5>{user.name}</h5>
            <p className="text-muted mb-1">{user.email}</p>
            <p className="text-muted">
              Rooms Created: <strong>{createdCount}</strong> | Joined: <strong>{joinedCount}</strong>
            </p>
            <button className="btn btn-outline-primary edit-btn mt-3" onClick={handleEditProfile}>
              <i className="bi bi-pencil me-2"></i>Edit Profile
            </button>
          </div>
        </div>

        {/* Room Management Section */}
        <div className="room-section">
          <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
            <button className="btn btn-primary" onClick={handleCreateRoom}>
              <i className="bi bi-plus-circle me-2"></i>Create New Room
            </button>
            <button className="btn btn-success" onClick={handleJoinRoom}>
              <i className="bi bi-box-arrow-in-right me-2"></i>Join Room
            </button>
          </div>

          <div className="card shadow p-4">
            <h4 className="mb-3">Your Rooms</h4>
            {rooms.length === 0 ? (
              <p className="text-muted">You haven't joined or created any rooms yet.</p>
            ) : (
              <ul className="list-group">
                {rooms.map(room => (
                  <li
                    key={room.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>
                      <i className="bi bi-door-closed me-2"></i>
                      {room.name}
                    </span>
                    <span className="badge bg-secondary">{room.type}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
