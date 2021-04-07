import fitness from './items/fitness.jpg';
import laptop from './items/laptop.jpg';
import milk from './items/milk.jpg';
import nike from './items/nike.jpg';
import ps4 from './items/ps4.jpg';
import rent from './items/rent.jpg';
import wine from './items/wine.jpg';
import rice from './items/rice.jpg';

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
