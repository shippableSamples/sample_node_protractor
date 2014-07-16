exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: "firefox"
  },
  onPrepare: function() {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('shippable/testresults', true, true, 'junit')
    );
  }
};
