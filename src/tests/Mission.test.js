import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Missions from '../components/Mission/Mission';
import store from '../redux/store';

describe('Missions', () => {
  test('Render Missions Component', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
