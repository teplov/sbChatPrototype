const operatorName = 'Василиса';
const operatorAvatar =
  'https://uploads.codesandbox.io/uploads/user/2f6a626d-8b4a-4683-82bc-ba64a08d312f/Mfd5-avatar.jpg';
const botName = 'Такси бот';
const botAvatar =
  'https://uploads.codesandbox.io/uploads/user/2f6a626d-8b4a-4683-82bc-ba64a08d312f/GRQe-757177690.jpg';

export default [
  {
    userId: 1,
    dir: 0,
    operator: botName,
    avatar: botAvatar,
    text: 'Вас приветствует бот службы заказа такси. Чем могу помочь?'
  },
  {
    dir: 1,
    text:
      'Добрый вечер. Я хотел бы заказать такси, надо ехать на железнодорожный вокзал.'
  },
  {
    userId: 1,
    dir: 0,
    operator: botName,
    avatar: botAvatar,
    text: 'Отлично! На какой вокзал поедем?',
    buttons: [
      'Белорусский',
      'Киевский',
      'Казанский',
      'Ленинградский',
      'Павелецкий',
      'Рижский',
      'Ярославский'
    ]
  },
  {
    dir: 1,
    text: 'Киевский'
  },
  {
    userId: 1,
    dir: 0,
    operator: botName,
    avatar: botAvatar,
    text: 'Куда подать машину? Назовите свой адрес.'
  },
  {
    dir: 1,
    text: 'Площадь Победы, дом 8, первый подъезд'
  },
  {
    userId: 1,
    dir: 0,
    operator: botName,
    avatar: botAvatar,
    text: 'Ээээ, я что-то не могу понять, что за адрес. :('
  },
  {
    userId: 1,
    dir: 0,
    operator: botName,
    avatar: botAvatar,
    text: 'Давайте, я лучше переключу вас на оператора.'
  },
  {
    userId: 2,
    dir: 0,
    operator: operatorName,
    avatar: operatorAvatar,
    text: 'Площадь Победы, дом 8, первый подъезд. Верно?'
  },
  {
    dir: 1,
    text: 'Да'
  },
  {
    userId: 2,
    dir: 0,
    operator: operatorName,
    avatar: operatorAvatar,
    text: 'Хорошо. Когда нужно прислать такси?'
  },
  {
    dir: 1,
    text: 'Прямо сейчас'
  },
  {
    dir: 1,
    text: 'Нас будет четверо'
  },
  {
    dir: 1,
    text: 'также есть багаж, 3 больших чемодана.'
  },
  {
    userId: 2,
    dir: 0,
    operator: operatorName,
    avatar: operatorAvatar,
    text:
      'Хорошо, за вами приедет большое авто. Ждите, за 5 минут машина будет на месте.'
  },
  {
    dir: 1,
    text: 'Спасибо'
  }
];
