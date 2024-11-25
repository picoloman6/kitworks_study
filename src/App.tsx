import CompanyBoard from '@pages/boards/CompanyBoard';
import MenuBoard from '@pages/boards/MenuBoard';
import CompanyNewBoard from '@pages/newBoards/CompanyNewBoard';

const App = () => {
  return (
    <div>
      <MenuBoard />
      <CompanyBoard />
      <CompanyNewBoard />
    </div>
  );
};

export default App;
