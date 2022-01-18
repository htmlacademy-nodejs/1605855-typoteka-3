'use strict';

const chalk = require(`chalk`);
const {
  getRandomInt,
  shuffle,
} = require(`../utils`);

const {
  DEFAULT_COUNT,
  FILE_NAME,
  TITLES,
  SENTENCES,
  DATES,
  CATEGORIES
} = require(`../constants`);

const fs = require(`fs`).promises;

const generateOffers = (count) => (
  Array(count).fill({}).map(() => ({
  title: TITLES[getRandomInt(0, TITLES.length - 1)],
  announce: shuffle(SENTENCES).slice(1, 5).join(' '),
  fullText: shuffle(SENTENCES).slice(1, 10).join(' '),
  createdDate: DATES[getRandomInt(0, DATES.length - 1)],
  category: [CATEGORIES[getRandomInt(0, CATEGORIES.length - 1)]],
  }))
);

module.exports = {
  name: '--generate',
  async run(args) {
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.info(chalk.green(`Operation success. File created.`));
    } catch(err) {
      console.error(chalk.red(`Can't write data to file...`));
    }
  }
};
