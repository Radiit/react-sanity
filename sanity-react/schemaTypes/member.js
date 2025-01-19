export default {
    name: 'member',
    title: 'Team Member',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Nama lengkap anggota tim.',
      },
      {
        name: 'nickname',
        title: 'Nickname',
        type: 'string',
        description: 'Nickname dalam game.',
      },
      {
        name: 'profilePicture',
        title: 'Profile Picture',
        type: 'image',
        description: 'Foto profil anggota tim.',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'role',
        title: 'Role',
        type: 'reference', // Referensi ke schema 'role'
        to: [{ type: 'role' }],
      },
      {
        name: 'favoriteWeapon',
        title: 'Favorite Weapon',
        type: 'reference', // Referensi ke schema 'favoriteWeapon'
        to: [{ type: 'favoriteWeapon' }],
      },
      {
        name: 'favoriteSpots',
        title: 'Favorite Spots',
        type: 'array', // Array referensi ke schema 'favoriteSpot'
        of: [{ type: 'reference', to: [{ type: 'favoriteSpot' }] }],
      },
      {
        name: 'weirdHabits',
        title: 'Weird Habits',
        type: 'array', // Array referensi ke schema 'weirdHabit'
        of: [{ type: 'reference', to: [{ type: 'weirdHabit' }] }],
      },
    ],
  };
  