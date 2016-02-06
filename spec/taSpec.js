var testData = require('./helpers/testData')
var ta = require('../public/js/ta');

describe("TA", function () {
    it("grades correctly", function () {
        expect(ta.gradeQuestions(testData.submittedTest, testData.questions)).toBe('3.67/5');
    });
});