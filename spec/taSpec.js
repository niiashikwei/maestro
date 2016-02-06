var testData = require('./helpers/questions_helper')
var ta = require('../public/js/ta');

describe("TA", function () {
    it("grades correctly", function () {
        expect(ta.gradeQuestions(testData.submittedTest, testData.questions)).toBe('0.00/5');
    });
});