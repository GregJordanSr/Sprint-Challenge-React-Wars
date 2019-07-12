import React from 'react';
import ReactDOM from 'react-dom';
import CharacterMap from './CharacterMap';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharacterMap />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<CharacterMap />', () => {
  if('should match snapshot', () => {
    const tree = renderer.create(<CharacterMap />).toJSON()

    expect(tree).toMatchSnapshot()
  });
});