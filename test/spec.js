
var code = require('../js/calculator.js');

describe('jQuery Calculator', function() {
  it('multiplies double-digit numbers correctly', function() {
    var arr1 = ['81', '*', '81'];
    expect(code.calculateValue(arr1)).toEqual(6561);
    var arr2 = ['81', '*', '8'];
    expect(code.calculateValue(arr1)).toEqual(648);
    expect(true).toEqual(false);
  });
});
