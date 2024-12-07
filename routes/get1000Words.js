import express from "express";
import getWordsByLanguageCode from "../controllers/get1000wordsLanguageCode.js";
import getWordsLanguageName from "../controllers/get1000wordsLanguageName.js";

const router = express.Router();

router.get("/words/code/:languageCode", getWordsByLanguageCode);
router.get("/words/name/:languageName", getWordsLanguageName);

export default router;
