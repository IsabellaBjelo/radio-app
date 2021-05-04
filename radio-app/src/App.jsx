import { BrowserRouter, Route } from 'react-router-dom';

import ChannelsProvider from './contexts/ChannelsProvider';
import CategoriesProvider from './contexts/CategoriesProvider';

import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Channels from './pages/Channels';
import ProgramByCategory from './pages/ProgramByCategory'
import ChannelSchedule from './pages/ChannelSchedule';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ChannelsProvider>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/channels' component={Channels} />
          <Route exact path='/channels/schedule/:channelId/:date' component={ChannelSchedule}/>
        </ChannelsProvider>
        <CategoriesProvider>
          <Route exact path='/categories' component={Categories} />
          <Route exact path='/programByCategory' component={ProgramByCategory} />
        </CategoriesProvider>
        <Route exact path='/login' component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
