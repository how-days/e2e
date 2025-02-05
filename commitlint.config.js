module.exports = {
  plugins: [
    {
      rules: {
        'match-custom-pattern': (parsed) => {
          const { reference, subject, type } = parsed;
          if (!type) {
            return [false, 'Commit message should start with "(fix|test|chore):"'];
          }
          if (type === 'chore') {
            if (!subject) {
              return [false, 'Subject is missing in commit message'];
            }

            return [true, ''];
          }
          if (type !== 'fix' && type !== 'test') {
            return [false, 'Commit message should start with "(fix|test):"'];
          }
          if (!subject.match(/\[INTRA-\d+\]/)) {
            return [false, 'Commit message should contain [INTRA-XXXX]'];
          }
          return [true, ''];
        },
      },
    },
  ],
  rules: {
    'match-custom-pattern': [2, 'always'],
  },
};
