describe("Calculator tests(Lecture 3)", function () {
    describe('Plus', () => {
        const testData = [
            {
                a: -2,
                b: 3,
                expected: 1,
            },
            {
                a: 2,
                b: -5,
                expected: -3,
            },
            {
                a: 0,
                b: 0,
                expected: 0,
            },
            {
                a: 0,
                b: 3,
                expected: 3,
            },
            {
                a: -1,
                b: 0,
                expected: -1,
            },

        ];

        testData.forEach(data => {
            const {a, b, expected} = data;

            const actual = plus(a, b);

            it(`Вводим:  ${a} + ${b} Должно вернуть:  ${expected}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('Minus', () => {
        const testData = [
            {
                a: 5,
                b: 3,
                expected: 2,
            },
            {
                a: 0,
                b: -5,
                expected: 5,
            },
            {
                a: 0,
                b: 0,
                expected: 0,
            },
            {
                a: 0,
                b: 3,
                expected: -3,
            },
            {
                a: -1,
                b: 0,
                expected: -1,
            },

        ];

        testData.forEach(data => {
            const {a, b, expected} = data;

            const actual = minus(a, b);

            it(`Вводим:  ${a} - ${b} Должно вернуть:  ${expected}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('Divided', () => {
        const testData = [
            {
                a: 5,
                b: 2,
                expected: 2.5,
            },
            {
                a: 5,
                b: 0,
                expected: "Неверное число!",
            },
            {
                a: 3,
                b: 1,
                expected: 3,
            },
            {
                a: -2,
                b: 5,
                expected: -0.4,
            },

        ];

        testData.forEach(data => {
            const {a, b, expected} = data;

            const actual = divided(a, b);

            it(`Вводим:  ${a} / ${b} Должно вернуть:  ${expected}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('multiple', () => {
        const testData = [
            {
                a: 5,
                b: 2,
                expected: 10,
            },
            {
                a: 0,
                b: -5,
                expected: 0,
            },
            {
                a: 0,
                b: 0,
                expected: 0,
            },
            {
                a: 3,
                b: 1,
                expected: 3,
            },
            {
                a: -2,
                b: 5,
                expected: -10,
            },

        ]; 

        testData.forEach(data => {
            const {a, b, expected} = data;

            const actual = multiple(a, b);

            it(`Вводим:  ${a} * ${b} Должно вернуть:  ${expected}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

});


describe("Equal", function () {
    let actual;
    let expected;

    it("Проверка на приоритетность умножения", function () {

        actual = equal([2, 5, 6, 1], ["+", "-", "*"]);
        expected = 1;

        assert.deepEqual(actual, expected);
    });

    it("Проверка на приоритетность деления", function () {

        actual = equal([2, 3, 6], ["+", "/"]);
        expected = 2.5;

        assert.deepEqual(actual, expected);
    });

    it("Проверка выражения с минусом и плюсом", function () {

        actual = equal([2, 3, 6], ["+", "-"]);
        expected = -1;

        assert.deepEqual(actual, expected);
    });

    it("Проверка выражений с нулями", function () {

        actual = equal([2, 0, 0], ["+", "-"]);
        expected = 2;

        assert.deepEqual(actual, expected);
    });

    it("Проверка суммы отрицательных чисел", function () {

        actual = equal([-2, -5], ["+"]);
        expected = -7;

        assert.deepEqual(actual, expected)
    });

    it("Проверка дробных чисел", function () {

        actual = equal([2.5, 2.3], ["+"]);
        expected = 4.8;

        assert.deepEqual(actual, expected)
    });

    it("Проверка дробных отрицательных чисел", function () {

        actual = equal([-2.5, -2.3], ["+"]);
        expected = -4.8;

        assert.deepEqual(actual, expected)
    });

});

describe("Bkt", function () {
    it("Проверка на возведение числа в минус", function () {
        const number = 2; //given

        let actual = bkt(number); //when

        let expected = -2; //then
        assert.strictEqual(actual, expected);
    });
});

describe("Clear", function () {
    let actual = clear("fafs");
    let expected = "";

    it("Проверка на отчистку окна", function () {
        assert.strictEqual(actual, expected);
    });
});

describe("Backspace", function () {
    let actual = backspace("1234");
    let expected = "123";

    it("Проверка на удаление одного символа", function () {
        assert.strictEqual(actual, expected);
    });
});



