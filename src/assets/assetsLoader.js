import fitness from './fitness.jpeg';
import laptop from './laptop.jpeg';
import milk from './milk.jpeg';
import nike from './nike.jpg';
import ps4 from './ps4.jpg';
import rent from './rent.jpeg';
import wine from './wine.jpg';
import rice from './rice.jpg';

export const ImageTypes = {
  FITNESS: 'FITNESS',
  LAPTOP: 'LAPTOP',
  MILK: 'MILK',
  NIKE: 'NIKE',
  PS4: 'PS4',
  RENT: 'RENT',
  WINE: 'WINE',
  RICE: 'RICE',
}

const Images = {
  [ImageTypes.FITNESS]: fitness,
  [ImageTypes.LAPTOP]: laptop,
  [ImageTypes.MILK]: milk,
  [ImageTypes.NIKE]: nike,
  [ImageTypes.PS4]: ps4,
  [ImageTypes.RENT]: rent,
  [ImageTypes.WINE]: wine,
  [ImageTypes.RICE]: rice,
};

export default function getImage(type) {
  return Images[type];
}
