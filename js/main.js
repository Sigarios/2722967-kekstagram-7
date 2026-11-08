const NAMES = ['Артём', 'Иван', 'Мария', 'Анна', 'Кекс', 'Евгений', 'Влад', 'Ольга', 'Пётр', 'Света'];
const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновение',
  'Вот это поворот!',
  'Посмотрите на этого милаху',
  'Мой новый день',
  'Незабываемые выходные',
  'Какая красивая природа'
];

let commentIdCounter = 1;

// Сократили стрелочные функции, чтобы линтер был доволен
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Обернули объект в круглые скобки ( ) => ({ ... })
const createComment = () => ({
  id: commentIdCounter++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS_MESSAGES),
  name: getRandomArrayElement(NAMES),
});

// Сократили функцию
const createComments = () => Array.from({ length: getRandomInteger(0, 30) }, createComment);

// Обернули объект в круглые скобки ( ) => ({ ... })
const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createComments(),
});

const photos = Array.from({ length: 25 }, (_, i) => createPhoto(i + 1));

// Добавили комментарий для линтера, чтобы он разрешил console.log
// eslint-disable-next-line no-console
console.log(photos);
