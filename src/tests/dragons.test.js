import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import Dragon from '../components/dragon';
import store from '../redux/store';

describe('Missions', () => {
  test('Render Dragons Component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Dragon />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});