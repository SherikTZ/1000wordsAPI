import { JSONFilePreset } from "lowdb/node";

export default async () => {
  const defaultData = {
    languages: [
      { code: "af", name: "Afrikaans" },
      { code: "ar", name: "Arabic" },
      { code: "az", name: "Azerbaijani" },
      { code: "be", name: "Belarusian" },
      { code: "bg", name: "Bulgarian" },
      { code: "bn", name: "Bengali" },
      { code: "bs", name: "Bosnian" },
      { code: "ca", name: "Catalan" },
      { code: "ceb", name: "Cebuano" },
      { code: "co", name: "Corsican" },
      { code: "cs", name: "Czech" },
      { code: "cy", name: "Welsh" },
      { code: "da", name: "Danish" },
      { code: "de", name: "German" },
      { code: "el", name: "Greek" },
      { code: "en", name: "English" },
      { code: "eo", name: "Esperanto" },
      { code: "es", name: "Spanish" },
      { code: "et", name: "Estonian" },
      { code: "eu", name: "Basque" },
      { code: "fa", name: "Persian" },
      { code: "fi", name: "Finnish" },
      { code: "fr", name: "French" },
      { code: "fry", name: "Frisian" },
      { code: "ga", name: "Irish" },
      { code: "gl", name: "Galician" },
      { code: "gu", name: "Gujarati" },
      { code: "ha", name: "Hausa" },
      { code: "haw", name: "Hawaiian" },
      { code: "he", name: "Hebrew" },
      { code: "hi", name: "Hindi" },
      { code: "hr", name: "Croatian" },
      { code: "ht", name: "Haitian" },
      { code: "hu", name: "Hungarian" },
      { code: "hy", name: "Armenian" },
      { code: "id", name: "Indonesian" },
      { code: "ig", name: "Igbo" },
      { code: "is", name: "Icelandic" },
      { code: "it", name: "Italian" },
      { code: "ja", name: "Japanese" },
      { code: "jv", name: "Javanese" },
      { code: "ka", name: "Georgian" },
      { code: "kk", name: "Kazakh" },
      { code: "km", name: "Khmer" },
      { code: "kn", name: "Kannada" },
      { code: "ko", name: "Korean" },
      { code: "ku", name: "Kurdish" },
      { code: "ky", name: "Kyrgyz" },
      { code: "la", name: "Latin" },
      { code: "lb", name: "Luxembourgish" },
      { code: "lo", name: "Lao" },
      { code: "lt", name: "Lithuanian" },
      { code: "lv", name: "Latvian" },
      { code: "mg", name: "Malagasy" },
      { code: "mi", name: "Maori" },
      { code: "mk", name: "Macedonian" },
      { code: "ml", name: "Malayalam" },
      { code: "mn", name: "Mongolian" },
      { code: "mr", name: "Marathi" },
      { code: "mt", name: "Maltese" },
      { code: "mww", name: "Hmong" },
      { code: "my", name: "Myanmar (Burmese)" },
      { code: "ne", name: "Nepali" },
      { code: "nl", name: "Dutch" },
      { code: "no", name: "Norwegian" },
      { code: "ny", name: "Chichewa" },
      { code: "pa", name: "Punjabi" },
      { code: "pl", name: "Polish" },
      { code: "ps", name: "Pashto" },
      { code: "pt", name: "Portuguese" },
      { code: "ro", name: "Romanian" },
      { code: "ru", name: "Russian" },
      { code: "si", name: "Sinhala" },
      { code: "sk", name: "Slovak" },
      { code: "sl", name: "Slovenian" },
      { code: "so", name: "Somali" },
      { code: "sq", name: "Albanian" },
      { code: "sr", name: "Serbian" },
      { code: "st", name: "Sesotho" },
      { code: "su", name: "Sundanese" },
      { code: "sv", name: "Swedish" },
      { code: "sw", name: "Swahili" },
      { code: "ta", name: "Tamil" },
      { code: "te", name: "Telugu" },
      { code: "tg", name: "Tajik" },
      { code: "th", name: "Thai" },
      { code: "tl", name: "Tagalog (Filipino)" },
      { code: "tr", name: "Turkish" },
      { code: "uk", name: "Ukrainian" },
      { code: "ur", name: "Urdu" },
      { code: "uz", name: "Uzbek" },
      { code: "vi", name: "Vietnamese" },
      { code: "xh", name: "Xhosa" },
      { code: "yi", name: "Yiddish" },
      { code: "yo", name: "Yoruba" },
      { code: "zh", name: "Chinese" },
      { code: "zsm", name: "Malaysian" },
      { code: "zu", name: "Zulu" },
    ],
  };

  try {
    const db = await JSONFilePreset("./models/db.json", defaultData);
    await db.write();
    console.log("Database initialized successfully.");
  } catch (error) {
    console.error("Error initializing the database:", error);
    throw error;
  }
};
