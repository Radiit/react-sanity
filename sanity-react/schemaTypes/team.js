export default {
    name: 'team',
    title: 'CSGO Team',
    type: 'document',
    fields: [
      {
        name: 'teamName',
        title: 'Team Name',
        type: 'string',
        description: 'Nama tim (e.g., CSGO2 Cendana).',
      },
      {
        name: 'members',
        title: 'Members',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'member' }] }],
        description: 'Anggota tim.',
      },
      {
        name: 'roles',
        title: 'Roles',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'role' }] }],
        description: 'Roles di tim ini.',
      },
      {
        name: 'favoriteSpots',
        title: 'Favorite Spots',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'favoriteSpot' }] }],
        description: 'Spot favorit di map.',
      },
      {
        name: 'favoriteWeapons',
        title: 'Favorite Weapons',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'favoriteWeapon' }] }],
        description: 'Senjata favorit anggota tim.',
      },
      {
        name: 'weirdHabits',
        title: 'Weird Habits',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'weirdHabit' }] }],
        description: 'Kebiasaan aneh anggota tim.',
      },
    ],
  };
  