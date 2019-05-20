import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

    const cards = [ 'a', 'b' ]

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List header="List" cards={cards} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('render the UI as expected', () => {
        const tree = renderer
            .create(<List
                header='List'
                cards={cards}
                key='key'
                />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
