import { getWordsByLanguageCode } from "thousand-most-common-words";
import { JSONFilePreset } from "lowdb/node";

async function codeExists(languageCode) {
  const db = await JSONFilePreset("./models/db.json", []);
  const { languages } = db.data;

  for (const language of languages) {
    if (language.code === languageCode) {
      return true;
    }
  }
  return false;
}

export default async (req, res) => {
  const languageCode = req.params.languageCode;

  if (!languageCode) {
    return res.status(400).json({ error: "Missing language code" });
  }

  if (!(await codeExists(languageCode))) {
    return res.status(404).json({ error: "Language code not found" });
  }

  const words = await languageCode;
  res.json(words);
};
