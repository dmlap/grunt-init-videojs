(function(vjs) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('videojs.{%= name %}', {
    // This will run before each test in this module.
    setup: function() {
      this.player = vjs(document.querySelector('#qunit-fixture video'));
    }
  });

  test('is registered', function() {
    expect(1);
    ok(this.player.{%= name %}, 'the {%= name %} plugin is present');
  });

  test('is awesome', function() {
    expect(2);
    this.player.{%= name %}();
    strictEqual(this.player.{%= name %}.go(), 'awesome.', 'should be awesome');
    strictEqual(this.player.{%= name %}.extreme(), 'awesome!', 'should be thoroughly awesome');
  });

  test('default options can be overridden', function() {
    expect(1);
    this.player.{%= name %}({
      awesome: false
    });

    strictEqual(this.player.{%= name %}.go(), ':(', 'should be sad face');
  });

}(window.videojs));
