import LocalizedStrings from 'react-native-localization';
// export const DEFAULT_LANGUAGE = 'en';

const strings = {
  en: {
    WELCOME: 'Welcome ',
    
  },
  fr: {
    WELCOME: 'Bienvenue ',
  
  },
};

export default new LocalizedStrings(strings);
