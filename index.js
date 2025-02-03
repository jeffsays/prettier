import fs from "node:fs";
import YAML from "yaml";

const prettierConfig = fs.readFileSync(".prettierrc.yml", "utf-8");
const config = YAML.parse(prettierConfig);

export default config;
