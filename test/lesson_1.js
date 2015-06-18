'use strict';

var lesson = require('../lessons/1_basics').Lesson;
var should = require('should');

describe('Lesson 1 : Basics', function() {
  beforeEach(function(done) {
    done();
  });

  it('1. Function should return a string saying hello to the world.', function(done) {
    should.exist(lesson.sayHelloWorld());
    ( lesson.sayHelloWorld() ).toUpperCase().should.match('HELLO WORLD');
    done();
  });

  if (lesson.getHelloWorldLength) {
    it('2. Function should return the length of "Hello World"', function(done) {
      lesson.getHelloWorldLength().should.match('hello world'.length);
      done();
    });
  }

  if (lesson.addTwoNumbers) {
    it('3. Function should return the addition of two number', function(done) {
      var number1 = Math.ceil(Math.random() * 1000);
      var number2 = Math.ceil(Math.random() * 1000);
      lesson.addTwoNumbers(number1, number2).should.match(number1 + number2);
      done();
    });
  }

  if (lesson.getFunctionThatAddTwoNumbers) {
    it('4. Function should return another function that make the addition of two numbers', function(done) {
      var number1 = Math.ceil(Math.random() * 1000);
      var number2 = Math.ceil(Math.random() * 1000);
      lesson.getFunctionThatAddTwoNumbers()(number1, number2).should.match(number1 + number2);
      done();
    });
  }

  if (lesson.getFunctionThatDoASubstraction) {
    it('5. Function should return another function that make the substraction of two numbers', function(done) {
      var number1 = Math.ceil(Math.random() * 1000);
      var number2 = Math.ceil(Math.random() * 1000);
      lesson.getFunctionThatDoASubstraction()(number1, number2).should.match(number1 - number2);
      done();
    });
  }

  if (lesson.multipleChoiceQuestion) {
    it('6. How is your QCM? Did I told you that you have -5 point by each false answer?', function(done) {
      var answers = lesson.multipleChoiceQuestion();
      var myDeclaratedVar;

      answers.should.eql([
        ( 'hello world'.replace('hello', 'goodbye') === 'goodbye world' ) && ( 'hello'.length === 2 ),
        true || false,
        !true,
        typeof 6 === 'number',
        typeof (typeof 6) !== 'string',
        !lesson.sayHelloWorld,
        true !== myDeclaratedVar,
        !undefined,
        false === undefined,
        lesson.addTwoNumbers(6, 3)  === lesson.addTwoNumbers(6, 3, 12),
        6 <= 3,
        1/3 === 0.3333333333333333,
        0.1 + 0.2 === 0.3
      ]);

      done();
    });
  }

  if (lesson.multiplyTwoArrays) {
    it('7. The method should multiply two arrays', function(done) {
      var sizeOfArrays = Math.ceil(Math.random() * 7) + 5;
      var a = [];
      var b = [];
      var expected = [];

      for (var i = 0; i < sizeOfArrays; i++) {
        a[i] = Math.ceil(Math.random() * 50);
        b[i] = Math.ceil(Math.random() * 50);

        expected[i] = a[i] * b[i];
      }

      lesson.multiplyTwoArrays(a, b).should.eql(expected);
      done();
    });
  }

  afterEach(function(done) {
    done();
  });

});
