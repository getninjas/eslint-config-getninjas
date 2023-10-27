module.exports = {
  rules: {
    // We use this rule only to allow WebPack import.
    // We manipulate the airbrake import to differentiate it in Server and Client environments,
    // which is why this rule is important.
    "import/no-unresolved": [
      "error",
      {
        ignore: ["airbrake", "@faker"],
      },
    ],
    // We use this rule only to allow naming with _abTest for Ab Tests
    "@typescript-eslint/naming-convention": [
      "error",
      // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"],
        filter: {
          regex: "_abTest\\.*",
          match: false,
        },
      },
      // Allow camelCase functions (23.2), and PascalCase functions (23.8)
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],

    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        fixStyle: "inline-type-imports",
      },
    ],

    "import/consistent-type-specifier-style": ["error", "prefer-inline"],
  },
};
