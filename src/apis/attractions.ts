import axios from 'axios';

export async function getPlacesImages() {
  try {
    const images = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/photos`,
      {
        location_id: '8797440',
        language: 'en_US',
        currency: 'USD',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'tourist-attraction.p.rapidapi.com',
          'x-rapidapi-key':
            'd071367808msh1dfd9978c94a73dp1c24e7jsnaecc15b4a65c',
        },
      }
    );
    return images;
  } catch (err) {
    console.log(`Error fetching photos ${err}`);
    return err;
  }
}
