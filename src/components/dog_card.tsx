type Dog = {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
};
interface DogCardProps {
  dogObject: Dog;
  dogIndex: number;
}

const DogCard: React.FC<DogCardProps> = (props) => {
  const { name, species, favFoods, birthYear } = props.dogObject;
  return (
    <div className='card'>
      <h3 className='card__text card__header'>{name}</h3>
      <p className='card__text'>Species: {species}</p>
      <p className='card__text'>Favourite Food(s): {favFoods}</p>
      <p className='card__text'>Birth Year: {birthYear}</p>
    </div>
  );
};
export default DogCard;
