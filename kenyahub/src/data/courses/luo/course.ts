// ============================================================
// Dholuo (Luo) Language Configuration
// ============================================================

import type { Exercise, LanguageConfig, CourseUnit } from '../types';
import { LESSONS, LESSON_CATEGORIES } from './lessons';

export const LUO_CONFIG: LanguageConfig = {
  id: 'luo',
  name: 'Dholuo',
  nativeName: 'Dholuo',
  family: 'Nilotic',
  counties: ['Kisumu', 'Siaya', 'Homa Bay', 'Migori'],
  speakers: '5.8M',
  speechLocale: '',
  description: 'A River-Lake Nilotic language spoken in the Lake Victoria basin of Western Kenya.',
  color: '#D4A843',
};

// ============================================================
// Course Units → Skills → Words/Sentences
// Structured for the interactive skill tree
// ============================================================

// ============================================================
// Practice Sentences for Luo Skills (from the 1920 Handbook)
// ============================================================
const LUO_SKILL_SENTENCES: Record<string, { target: string; source: string }[]> = {
  'alphabet-pronunciation': [
    { target: 'Dholuo onge herufi c, j, q, v, x, z mag dho ngere.', source: 'Dholuo has no English letters c, j, q, v, x, z.' },
    { target: 'Wawacho dholuo maber.', source: 'We speak Dholuo well.' },
    { target: 'Soma wechegi maber.', source: 'Read these words well.' },
  ],
  'greetings': [
    { target: 'Oyawore, nade?', source: 'Good morning, how are you?' },
    { target: 'Oimore, ber ahinya.', source: 'Good evening, very good.' },
    { target: 'Oriti, wanenre kendo.', source: 'Goodbye, we shall see each other again.' },
  ],
  'numbers': [
    { target: 'An gi ji ariyo.', source: 'I have two people.' },
    { target: 'Kel kombe adek.', source: 'Bring three chairs.' },
    { target: "Ng'at achiel obiro.", source: 'One person came.' },
  ],
  'time-expressions': [
    { target: 'Kiny wanadhi pacho.', source: 'Tomorrow we shall go home.' },
    { target: 'Tinende koth chwe.', source: 'Today it is raining.' },
    { target: 'Sa adi sani?', source: 'What time is it now?' },
  ],
  'question-words': [
    { target: "Nyingi ng'a?", source: 'What is your name?' },
    { target: 'Idhi kanye?', source: 'Where are you going?' },
    { target: "Ang'o mamiyo iweyo?", source: 'Why do you leave?' },
  ],
  'nouns-gender-article': [
    { target: 'Dhano maber obiro.', source: 'A good person came.' },
    { target: 'Nyako dhi ka.', source: 'The girl goes here.' },
    { target: 'Woyi dwaro kuon.', source: 'The boy wants food.' },
  ],
  'pronouns': [
    { target: 'An adhi e chiro.', source: 'I am going to the market.' },
    { target: "In idwaro ang'o?", source: 'What do you want?' },
    { target: 'Wan wahero pacho.', source: 'We love home.' },
  ],
  'possessives': [
    { target: 'Ma en oda.', source: 'This is my house.' },
    { target: 'Kwesi mar Petrus ni ka.', source: "Peter's pipe is here." },
    { target: 'Kombe mag won ni malo.', source: "Father's chairs are up there." },
  ],
  'plurals': [
    { target: 'Guogi duto ringo.', source: 'All the dogs are running.' },
    { target: 'Dhok ni e laro.', source: 'The cattle are in the yard.' },
    { target: 'Nyithindo nindo.', source: 'The children are sleeping.' },
  ],
  'demonstratives': [
    { target: 'Ot ma en mara.', source: 'This house is mine.' },
    { target: 'Ji macha dhi chiro.', source: 'Those people are going to the market.' },
    { target: 'Bi kaeni piyo.', source: 'Come here quickly.' },
  ],
  'verb-tenses': [
    { target: 'Ahero kwesi mara.', source: 'I love my pipe.' },
    { target: 'Nahero chiemo maber.', source: 'I loved good food.' },
    { target: 'Wanaher pacho marwa.', source: 'We shall love our home.' },
  ],
  'verb-conjugation-deep': [
    { target: 'Asehero wuoth ahinya.', source: 'I have loved the journey very much.' },
    { target: 'Negisehero somo buge.', source: 'They had loved reading books.' },
    { target: 'Giniher timbe mabeyo.', source: 'They will love good deeds.' },
  ],
  'negation': [
    { target: 'Ok adwar chiemo sani.', source: 'I do not want food now.' },
    { target: 'Kik idhi e aora.', source: 'Do not go to the river.' },
    { target: "Onge ng'ato e ot.", source: 'There is nobody in the house.' },
  ],
  'reflective-pronouns': [
    { target: 'An awuon aloso oda.', source: 'I myself built my house.' },
    { target: 'In iwuon ibiro?', source: 'Will you yourself come?' },
    { target: 'En kende odak kanyo.', source: 'He lives there alone.' },
  ],
  'prepositions-conjunctions': [
    { target: 'Thuol ni e ot.', source: 'A snake is in the house.' },
    { target: "Nobiro gi tong'.", source: 'He came with a spear.' },
    { target: 'Tedi kuon mondo wacham.', source: 'Cook food so that we eat.' },
  ],
  'word-building': [
    { target: 'Japur tiyo e puodho.', source: 'The farmer is working in the field.' },
    { target: 'Japuonj somo bugene.', source: 'The teacher reads his books.' },
    { target: 'Jatedo tedi chiemo.', source: 'The cook cooks food.' },
  ],
  'reflexive-reciprocal': [
    { target: 'Aherora ahinya.', source: 'I love myself very much.' },
    { target: "Waherore ng'ato gi nyawadgi.", source: 'We love one another as companions.' },
    { target: 'Ji duto chokore kaeni.', source: 'All people assemble here.' },
  ],
  'family': [
    { target: 'Min gi won ohero nyathi.', source: 'Mother and father love the child.' },
    { target: 'Omera gi nyamera obiro.', source: 'My brother and my sister came.' },
    { target: 'Dayo tedi kuon maber.', source: 'Grandmother cooks good ugali.' },
  ],
  'animals': [
    { target: 'Guok rwakore gi sibuor.', source: 'The dog confronts the lion.' },
    { target: 'Rawo luor liel.', source: 'The hippo fears the elephant.' },
    { target: 'Gweno chamo kal.', source: 'The chicken eats millet.' },
  ],
  'body-parts': [
    { target: 'Wiya rama ahinya.', source: 'My head hurts very much.' },
    { target: 'Bada otur e wuoth.', source: 'My arm is broken on the journey.' },
    { target: 'Chinga ni maber.', source: 'My eyes are good.' },
  ],
  'food-drink': [
    { target: 'Adwaro chamo rech gi kuon.', source: 'I want to eat fish with ugali.' },
    { target: 'Madhi pi malew.', source: 'Drink clean water.' },
    { target: 'Kel chak maliet.', source: 'Bring hot milk.' },
  ],
  'nature': [
    { target: "Chieng' rieny malo.", source: 'The sun is shining above.' },
    { target: "Koth maduong' ochwe piny.", source: 'Heavy rain has fallen on the ground.' },
    { target: 'Yadhni bor ahinya.', source: 'This tree is very tall.' },
  ],
  'home-village': [
    { target: 'Oda ni but aora.', source: 'My house is near the river.' },
    { target: 'Chiegi dhoot maber.', source: 'Close the door well.' },
    { target: 'Jo dala duto nindo.', source: 'All the home people are sleeping.' },
  ],
  'adverbs': [
    { target: 'Wach mos mondo awinji.', source: 'Speak slowly so that I understand you.' },
    { target: 'Ret piyo kendo bi ka.', source: 'Make haste and come here.' },
    { target: 'Otiyo matek ahinya.', source: 'He worked very hard.' },
  ],
  'colors-adjectives': [
    { target: "Dhano maber ohero ng'wono.", source: 'A good person loves kindness.' },
    { target: "Dhiang' marachar ni e puodho.", source: 'The white cow is in the field.' },
    { target: "Ruath marating' maduong'.", source: 'The black bull is large.' },
  ],
  'naming-traditions': [
    { target: 'Otieno nonyuol gotieno.', source: 'Otieno was born at night.' },
    { target: 'Akinyi nonyuol gokinyi.', source: 'Akinyi was born in the morning.' },
    { target: 'Opiyo en nyathi ma kayo.', source: 'Opiyo is the first-born twin child.' },
  ],
  'interjections-exclamations': [
    { target: 'Ero kamano, ber ahinya!', source: 'Thank you, very good!' },
    { target: "Yaye! Wuora maduong'!", source: 'Oh my! My great father!' },
    { target: 'Adieri, mano adieri.', source: 'Truly, that is true.' },
  ],
  'common-expressions': [
    { target: 'Iriyo nade tinende?', source: 'How do you do today?' },
    { target: 'Ariyo maber, erokamano.', source: 'I do well, thank you.' },
    { target: 'Koro onego adhi pacho.', source: 'Now I must go home.' },
  ],
  'at-the-village': [
    { target: 'Ruoth ni kanye e dalani?', source: 'Where is the chief in this village?' },
    { target: 'Abiro neno jo dalani.', source: 'I have come to visit the village people.' },
    { target: "In gi dhok mang'eny?", source: 'Do you have many cattle?' },
  ],
  'health-wellbeing': [
    { target: 'Ringri ber tinende?', source: 'Are you feeling well today?' },
    { target: 'Ee, ringra ber ahinya.', source: 'Yes, I feel very well.' },
    { target: 'Wiriye yadhini e kendo.', source: 'Apply this ointment to the wound.' },
  ],
  'work-employment': [
    { target: 'Idwaro tich e puodho?', source: 'Do you want work in the field?' },
    { target: 'Tiuru piyo kendo maber.', source: 'Work hard and well.' },
    { target: 'Kiny nibi gokinyi.', source: 'Come early tomorrow morning.' },
  ],
  'travel-journey': [
    { target: 'Kiny wanadhi safar maboyo.', source: 'Tomorrow we shall go on a long journey.' },
    { target: 'Isetweyo gikmoko duto?', source: 'Have you packed all the loads?' },
    { target: 'Wasechopo e dala.', source: 'We have arrived at the home.' },
  ],
  'household-commands': [
    { target: 'Kel pi maliet e kendo.', source: 'Bring hot water to the fireplace.' },
    { target: 'Lwok kombe gi messeni.', source: 'Wash these chairs and tables.' },
    { target: 'Chiegi dhoot maber.', source: 'Close the door properly.' },
  ],
  'weather-nature-talk': [
    { target: 'Koth chwe matek ahinya.', source: 'It is raining very hard.' },
    { target: 'Koth ochok kendo piny ler.', source: 'The rain has stopped and the day is clear.' },
    { target: "Chieng' kech ahinya godiechieng'.", source: 'The sun is very hot at midday.' },
  ],
};

export const LUO_UNITS: CourseUnit[] = LESSON_CATEGORIES.map(category => {
  return {
    id: category.id,
    title: category.name,
    description: category.description,
    icon: category.icon,
    skills: LESSONS.filter(lesson => lesson.category === category.id).map(lesson => {
      const words = lesson.cards.map(card => ({
        target: card.luo,
        source: card.english,
        pronunciation: card.hint || '',
        audio: card.audio,
        example: card.example,
        response: card.response,
      }));
      const findSourceWord = (answer: string) => {
        const normalizedAnswer = answer.toLowerCase().trim();
        const matches = words.filter((word) =>
          [word.target, word.source].some(
            (value) => value.toLowerCase().trim() === normalizedAnswer
          )
        );
        return matches.length === 1 ? matches[0] : undefined;
      };
      const sentences: { target: string, source: string }[] = LUO_SKILL_SENTENCES[lesson.id] || [];
      const authoredExercises: Exercise[] = lesson.exercises.map(exercise => {
        const sourceWord = findSourceWord(exercise.answer);
        if (exercise.type === 'choice' || exercise.type === 'match') {
          return {
            type: 'multiple_choice',
            prompt: exercise.question,
            correctAnswer: exercise.answer,
            options: exercise.options,
            hint: exercise.hint,
            sourceWord,
          };
        }

        if (exercise.type === 'order') {
          return {
            type: 'reorder',
            prompt: exercise.question,
            correctAnswer: exercise.answer.replace(/,/g, ' '),
            wordTiles: exercise.options,
            hint: exercise.hint,
            sourceWord,
          };
        }

        if (exercise.type === 'fill') {
          return {
            type: 'fill_blank',
            prompt: exercise.question,
            correctAnswer: exercise.answer,
            options: exercise.options,
            hint: exercise.hint,
            sourceWord,
          };
        }

        return {
          type: 'translate_to_english',
          prompt: exercise.question,
          correctAnswer: exercise.answer,
          hint: exercise.hint,
          sourceWord,
        };
      });
      
      return {
        id: lesson.id,
        title: lesson.title,
        icon: lesson.icon,
        description: lesson.description,
        tips: lesson.description,
        culturalNote: lesson.culturalNote,
        words,
        sentences,
        authoredExercises,
      };
    })
  };
});
