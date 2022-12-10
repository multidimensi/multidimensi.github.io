function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      defaultLanguage: 'en',
      pageLanguage: 'en',
      includedLanguages: 'en,ja,id',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
      multilanguagePage: true,
    },
    'google_translate_element'
  );
}
