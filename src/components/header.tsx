interface HeaderProps {
  numberOfCats: number;
  numberOfDogs: number;
}

const Header: React.FC<HeaderProps> = ({ numberOfCats, numberOfDogs }) => (
  <header className='header__container'>
    <h1 className='header__title header__welcome'>Welcome to React!</h1>
    <h2 className='header__title'>
      There are currently {numberOfCats} Cats and {numberOfDogs} Dogs in this
      Animals App
    </h2>
  </header>
);

export default Header;
