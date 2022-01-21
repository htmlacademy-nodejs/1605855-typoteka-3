'use strict';

const chalk = require(`chalk`);
const fs = require(`fs`).promises;
const path = require('path');

const {
  getRandomInt,
  shuffle,
} = require(`../utils`);

const {
  DEFAULT_COUNT,
  FILE_NAME,
  DATES
} = require(`../constants`);

const FILE_SENTENCES_PATH = `sentences.txt`;
const FILE_TITLES_PATH = `titles.txt`;
const FILE_CATEGORIES_PATH = `categories.txt`;
const dirname = `./data/`

const readContent = async (filePath) => {
  try {
    let  content = await fs.readFile(filePath, `utf8`);
    content = content.replace(/ +/g, ' ');
    content = content.replace(/^\s+|\s+$/gm,'')
    content = content.trim().split(`\n`);

    return content

  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

const generateOffers = (count, options) => (
  Array(count).fill({}).map(() => ({
  title: options.titles[getRandomInt(0, options.titles.length - 1)],
  announce: shuffle(options.sentences).slice(1, 5).join(' '),
  fullText: shuffle(options.sentences).slice(1, 10).join(' '),
  createdDate: DATES[getRandomInt(0, DATES.length - 1)],
  category: [options.categories[getRandomInt(0, options.categories.length - 1)]],
  }))
);

module.exports = {
  name: '--generate',
  async run(args) {
    const [titles, categories, sentences] = await Promise.all([
      readContent(path.join(dirname, FILE_SENTENCES_PATH)),
      readContent(path.join(dirname, FILE_TITLES_PATH)),
      readContent(path.join(dirname, FILE_CATEGORIES_PATH))
    ])

    const options = {
      titles, 
      categories,
      sentences
    }

    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer, options));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.info(chalk.green(`Operation success. File created.`));
    } catch(err) {
      console.error(chalk.red(`Can't write data to file...`));
    }
  }
};
