var __ = 'Fill me in';

describe('koan.js', function () {
  describe('Strings', function () {

    it('should create Strings', function () {
      expect('a String').toBe(__);
      expect(new String('a String')).toBe(__);
    });

    it('should concatenate Strings', function () {
      expect('a ' + 'String').toBe(__);
      expect(new String('a ') + 'String').toBe(__);
    });

    it('should convert an Number to String', function () {
      expect((1).toString()).toBe(__);
      expect(new String(1)).toBe(__);
    });

    it('should convert an Array to String', function () {
      expect([1, 2, 3].toString()).toBe(__);
      expect(new String([1, 2, 3])).toBe(__);
    });

    it('should convert an Object to String', function () {
      expect({ 'abc': 1, '2': 'banana'}.toString()).toBe(__);
      expect(new String({ 'abc': 1, '2': 'banana'})).toBe(__);
    });

    it('should have a type', function () {
      expect(typeof '').toBe(__);
      expect(typeof new String()).toBe(__);
    });

  });
});
