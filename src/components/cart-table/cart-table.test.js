import React from 'react';
import {CartTable} from './cart-table';
import renderer from 'react-test-renderer';

    test('RandomChar have rendered correctly', () => {
        const char = renderer.create(<CartTable/>).toJSON();
        expect(char).toMatchSnapshot()
    })
