"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white.bold("Milind Mishra"),
  handle: chalk.cyan("@thatbeautifuldream"),
  work: chalk.white("Software Engineer"),
  twitter: chalk.cyan("https://twitter.com/milindmishra_"),
  npm: chalk.red("https://npmjs.com/~milind-mishra"),
  github: chalk.green("https://github.com/thatbeautifuldream"),
  linkedin: chalk.blue("https://linkedin.com/in/mishramilind"),
  web: chalk.cyan("https://milindmishra.com"),
  npx: chalk.red("npx") + " " + chalk.white("milindmishra"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const details = [
  `${chalk.white.bold("Work:")} ${data.work}`,
  `${chalk.white.bold("Web:")} ${data.web}`,
  `${chalk.white.bold("LinkedIn:")} ${data.linkedin}`,
  `${chalk.white.bold("Twitter:")} ${data.twitter}`,
  `${chalk.white.bold("GitHub:")} ${data.github}`,
  `${chalk.white.bold("npm:")} ${data.npm}`,
  `${chalk.white.bold("Card:")} ${data.npx}`,
];

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + details.join(newline);

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
