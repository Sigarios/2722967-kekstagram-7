import { NAMES, COMMENTS_MESSAGES, DESCRIPTIONS } from './data.js';
import { getRandomInteger, getRandomArrayElement } from './util.js';

let commentIdCounter = 1;

const createComment = () => ({
  id: commentIdCounter++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS_MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createComments = () => Array.from({ length: getRandomInteger(0, 30) }, createComment);

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createComments(),
});

export const photos = Array.from({ length: 25 }, (_, i) => createPhoto(i + 1));
