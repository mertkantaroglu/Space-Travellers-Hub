import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import Rocket from '../components/dragon';
import store from '../redux/store';

describe('Missions', () => {
  test('Render Dragons Component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
