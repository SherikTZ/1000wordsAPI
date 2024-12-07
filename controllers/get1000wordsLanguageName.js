import MostCommonWords from "thousand-most-common-words";
import { JSONFilePreset } from "lowdb/node";

async function nameExists(name) {
  const db = await JSONFilePreset("./models/db.json", []);
  const { languages } = db.data;

  for (const language of languages) {
    if (language.name === name) {
      return true;
    }
  }
  return false;
}

export default async (req, res) => {
  const languageName = req.params.languageName;

  if (!languageName) {
    return res.status(400).json({ error: "Missing language name" });
  }

  if (!(await nameExists(languageName))) {
    return res.status(404).json({ error: "Language code not found" });
  }

  res.json(MostCommonWords.getWordsByLanguageName("Spanish"));
};
