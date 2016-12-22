const expect = require('chai').expect
var   foo = 'bar'
    , tea = [ 'chai', 'matcha', 'oolong' ];

describe('Array', function() {

    it('should return -1 when the value is not present', function() {
      expect(foo).to.be.a('string');
      //expect(foo).to.equal('bar');
      //expect(foo).to.have.length(3);
      //expect(tea).to.have.property('flavors').with.length(3);
    });

    it('should return -2 when the value is not present', function() {
      //expect(foo).to.be.a('string');
      expect(foo).to.equal('br');
      //expect(foo).to.have.length(3);
      //expect(tea).to.have.property('flavors').with.length(3);
    });

});
