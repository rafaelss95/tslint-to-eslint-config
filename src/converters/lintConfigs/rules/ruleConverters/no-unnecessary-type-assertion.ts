import { RuleConverter } from "../ruleConverter";

export const convertNoUnnecessaryTypeAssertion: RuleConverter = ({ ruleArguments }) => {
    return {
        rules: [
            {
                ...(ruleArguments.length !== 0 && {
                    ruleArguments: [{ typesToIgnore: ruleArguments }],
                }),
                ruleName: "@typescript-eslint/no-unnecessary-type-assertion",
            },
        ],
    };
};
