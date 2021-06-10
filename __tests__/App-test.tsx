/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const add = (a: number, b : number) : number => a + b;

// test('should add two numbers', () => {
//   const sum = add(3, 4);
//   expect(sum).toBe(7);
// });

it('renders correctly', () => {
  renderer.create(<App />);
});
