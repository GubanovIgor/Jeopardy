const mongoose = require('mongoose');
const { Card } = require('./Card');

mongoose.connect('mongodb://localhost:27017/jeopardy', { useNewUrlParser: true, useCreateIndex: true });

async function mainFunction() {
  const card1 = new Card({
    title: 'Про Никиту',
    questions: [
      {
        q: 'Кто говнюк?',
        a: 'Никита',
        p: 200,
      },
      {
        q: 'Кто вонючка?',
        a: 'Никита',
        p: 400,
      },
      {
        q: 'Кто всех достал?',
        a: 'Никита',
        p: 600,
      },
      {
        q: 'Самое обидное слово в мире',
        a: 'Никита',
        p: 800,
      },
      {
        q: 'Кто король?',
        a: 'Не Никита',
        p: 1000,
      },
    ]
  });
  await card1.save();
  const card2 = new Card({
    title: 'Про Никиту',
    questions: [
      {
        q: 'Кто говнюк?',
        a: 'Никита',
        p: 200,
      },
      {
        q: 'Кто вонючка?',
        a: 'Никита',
        p: 400,
      },
      {
        q: 'Кто всех достал?',
        a: 'Никита',
        p: 600,
      },
      {
        q: 'Самое обидное слово в мире',
        a: 'Никита',
        p: 800,
      },
      {
        q: 'Кто король?',
        a: 'Не Никита',
        p: 1000,
      },
    ]
  });
  await card2.save();
  const card3 = new Card({
    title: 'Про Никиту',
    questions: [
      {
        q: 'Кто говнюк?',
        a: 'Никита',
        p: 200,
      },
      {
        q: 'Кто вонючка?',
        a: 'Никита',
        p: 400,
      },
      {
        q: 'Кто всех достал?',
        a: 'Никита',
        p: 600,
      },
      {
        q: 'Самое обидное слово в мире',
        a: 'Никита',
        p: 800,
      },
      {
        q: 'Кто король?',
        a: 'Не Никита',
        p: 1000,
      },
    ]
  });
  await card3.save();
}

 //mainFunction();