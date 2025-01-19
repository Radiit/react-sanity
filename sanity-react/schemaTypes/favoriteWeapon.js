export default {
    name: 'favoriteWeapon',
    title: 'Favorite Weapon',
    type: 'document',
    fields: [
      {
        name: 'weaponName',
        title: 'Weapon Name',
        type: 'string',
        description: 'Nama senjata favorit (e.g., AWP, AK-47).',
      },
      {
        name: 'weaponType',
        title: 'Weapon Type',
        type: 'string',
        options: {
          list: [
            { title: 'Rifle', value: 'rifle' },
            { title: 'Sniper', value: 'sniper' },
            { title: 'SMG', value: 'smg' },
            { title: 'Pistol', value: 'pistol' },
          ],
        },
        description: 'Tipe senjata.',
      },
    ],
  };
  