import AnimalImage from './animal_image';
import cat1 from '../assets/images/cat1.jpg';
import cat2 from '../assets/images/cat2.jpg';
import cat3 from '../assets/images/cat3.jpg';
import cat4 from '../assets/images/cat4.jpg';
import cat5 from '../assets/images/cat5.jpg';
import cat6 from '../assets/images/cat6.jpg';
import cat7 from '../assets/images/cat7.jpg';
import cat8 from '../assets/images/cat8.jpg';
import cat9 from '../assets/images/cat9.jpg';
import cat10 from '../assets/images/cat10.jpg';
import cat11 from '../assets/images/cat11.jpg';
import cat12 from '../assets/images/cat12.jpg';

type Animal = {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
};
interface CardProps {
  animal: Animal;
  index: number;
  type: string;
}

const images = [
  {
    image: cat1,
    altText: 'A very nice animal',
    licenceType: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    attributionName: 'amblin',
    attributionUrl: 'https://www.flickr.com/people/amblin/',
  },
  {
    image: cat2,
    altText: 'A very nice animal',
    licenceType: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    attributionName: 'ivva',
    attributionUrl: 'https://www.flickr.com/people/ivva/',
  },
  {
    image: cat3,
    altText: 'A very nice animal',
    licenceType: 'CC BY-ND 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
    attributionName: 'Rachele Pettarelli Ph',
    attributionUrl: 'https://www.flickr.com/people/rachephotos/',
  },
  {
    image: cat4,
    altText: 'A very nice animal',
    licenceType: 'CC BY 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
    attributionName: 'renarl',
    attributionUrl: 'https://www.flickr.com/people/renarl/',
  },
  {
    image: cat5,
    altText: 'A very nice animal',
    licenceType: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    attributionName: 'x-oph',
    attributionUrl: 'https://www.flickr.com/people/x-oph/',
  },
  {
    image: cat6,
    altText: 'A very nice animal',
    licenceType: 'CC BY-ND 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
    attributionName: 'arrathoonlaa@att.net',
    attributionUrl: 'https://www.flickr.com/people/21851382@N04/',
  },
  {
    image: cat7,
    altText: 'A very nice animal',
    licenceType: 'CC BY 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
    attributionName: 'pavlovskyy',
    attributionUrl: 'https://www.flickr.com/people/pavlovskyy/',
  },
  {
    image: cat8,
    altText: 'A very nice animal',
    licenceType: 'CC BY 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
    attributionName: 'AleGranholm',
    attributionUrl: 'https://www.flickr.com/people/darthale/',
  },
  {
    image: cat9,
    altText: 'A very nice animal',
    licenceType: 'CC BY 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
    attributionName: 'Sardonic G',
    attributionUrl: 'https://www.flickr.com/people/24039825@N06/',
  },
  {
    image: cat10,
    altText: 'A very nice animal',
    licenceType: 'CC BY 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
    attributionName: 'www.metaphoricalplatypus.com',
    attributionUrl: 'https://www.flickr.com/people/29638108@N06/',
  },
  {
    image: cat11,
    altText: 'A very nice animal',
    licenceType: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    attributionName: 'abraham.williams',
    attributionUrl: 'https://www.flickr.com/people/4braham/',
  },
  {
    image: cat12,
    altText: 'A very nice animal',
    licenceType: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    attributionName: 'x-oph',
    attributionUrl: 'https://www.flickr.com/people/x-oph/',
  },
];

const Card: React.FC<CardProps> = (props) => {
  const { name, species, favFoods, birthYear } = props.animal;
  const { index, type } = props;
  const foods = favFoods.join(', ');
  return (
    <div className='card'>
      <h3 className='card__text card__header'>{name}</h3>
      <p className='card__text'>Species: {species}</p>
      <p className='card__text'>Favourite Food(s): {foods}</p>
      <p className='card__text'>Birth Year: {birthYear}</p>
      {type === 'cat' && index < images.length && (
        <AnimalImage
          image={images[index].image}
          altText={'A fluffy cat'}
          licenceType={images[index].licenceType}
          licenceUrl={images[index].licenceUrl}
          attributionName={images[index].attributionName}
          attributionUrl={images[index].attributionUrl}
        />
      )}
    </div>
  );
};
export default Card;
