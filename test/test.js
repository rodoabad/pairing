import chai from 'chai';

import add from '../src/add.js';

const expect = chai.expect;

describe('Add something', () => {

  it('should add 1+1', () => {

    const expectedAnswer = 2;

    expect(add(1, 1))
      .to
      .equal(expectedAnswer);

  });

});