import { convertNoUnnecessaryTypeAssertion } from "../no-unnecessary-type-assertion";

describe(convertNoUnnecessaryTypeAssertion, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnnecessaryTypeAssertion({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-unnecessary-type-assertion",
                },
            ],
        });
    });

    test("conversion with argument", () => {
        const result = convertNoUnnecessaryTypeAssertion({
            ruleArguments: ["Test"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ typesToIgnore: ["Test"] }],
                    ruleName: "@typescript-eslint/no-unnecessary-type-assertion",
                },
            ],
        });
    });
});
