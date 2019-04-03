const expect = require('chai').expect;

const lomNames = require('./index.js');

describe('lom-names', function() {
  it('should have a list of all names', function() {
    expect(isArrayofString(lomNames.all)).to.be.true;
  });

  it('should get a random name from the list', function() {
    const rand = lomNames.random();
    expect(lomNames.all.includes(rand)).to.be.true;
  });
});

function isArrayofString(arr) {
	return arr.every(function(item){
		return typeof item === 'string';
	})
}