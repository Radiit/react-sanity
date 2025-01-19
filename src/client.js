import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Konfigurasi Sanity
const client = sanityClient({
  projectId: 'fmgxqsfj', // Ganti dengan projectId Anda
  dataset: 'production', // Dataset Anda
  useCdn: true,
});

// Builder untuk URL gambar
const builder = imageUrlBuilder(client);

// Fungsi untuk membangun URL gambar
export const urlFor = (source) => builder.image(source);

export default client;
