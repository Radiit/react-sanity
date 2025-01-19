import React, { useEffect, useState } from 'react';
import client from '../client';
import TeamMemberCard from '../components/TeamMemberCard';

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  // Fetch data dari Sanity
  useEffect(() => {
    client
      .fetch(
        `*[_type == "member"]{
          name,
          nickname,
          role->{
            roleName
          },
          favoriteWeapon->{
            weaponName
          },
          favoriteSpots[]->{
            spotName
          },
          weirdHabits[]->{
            habit
          },
          "profilePicture": profilePicture.asset->url
        }`
      )
      .then((data) => setTeamMembers(data))
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  );
};

export default TeamPage;
