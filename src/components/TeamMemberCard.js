import React from 'react';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="card-container">
      {/* Gambar */}
      {member.profilePicture ? (
        <img
          src={member.profilePicture}
          alt={member.name}
          className="card-image"
        />
      ) : (
        <div className="card-image bg-gray-200 flex items-center justify-center">
          <span className="text-sm text-gray-500">No Image</span>
        </div>
      )}

      {/* Konten */}
      <div className="card-content">
        <h3 className="text-lg font-bold">{member.name}</h3>

        {/* Nickname */}
        <p className="text-sm text-gray-400">
          <span className="font-semibold">Nickname:</span> {member.nickname || "No Nickname"}
        </p>

        {/* Role */}
        <p className="text-sm text-gray-400">
          <span className="font-semibold">Role:</span> {member.role?.roleName || "No Role"}
        </p>

        {/* Favorite Weapon */}
        <p className="text-sm text-gray-400">
          <span className="font-semibold">Favorite Weapon:</span> {member.favoriteWeapon?.weaponName || "No Weapon"}
        </p>

        {/* Favorite Spots */}
        {member.favoriteSpots && member.favoriteSpots.length > 0 ? (
          <div className="text-sm text-gray-400">
            <p className="font-semibold">Favorite Spot:</p>
            <ul>
              {member.favoriteSpots.map((spot, index) => (
                <li key={index}>{spot.spotName}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-sm text-gray-400">No Favorite Spot</p>
        )}

        {/* Weird Habits */}
        {member.weirdHabits && member.weirdHabits.length > 0 ? (
          <div className="text-sm text-gray-400">
            <p className="font-semibold">Weird Habits:</p>
            <ul>
              {member.weirdHabits.map((habit, index) => (
                <li key={index}>{habit.habit}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-sm text-gray-400">No Weird Habits</p>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
