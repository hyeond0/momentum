const quotes = [
  {
    quote: "준비하지 않은 자는 기회가 와도 소용없다.",
    author: "알렉시스 드 토크빌",
  },
  {
    quote: "성공은 영원하지 않으며, 실패 역시 그러하다.",
    author: "델 크로스워드",
  },
  {
    quote: "다른 사람의 좋은 습관을 내 습관으로 만들어라.",
    author: "빌 게이츠",
  },
  {
    quote: "한번 포기하면 습관이 된다. 절대 포기하지 말아라.",
    author: "마이클 조던",
  },
  {
    quote: "내일이 곧 지금이다.",
    author: "엘리너 루즈벨트",
  },
  {
    quote: "무엇을 시도할 용기도 없으면서 멋진 삶을 바란단 말인가.",
    author: "빈센트 반 고흐",
  },
  {
    quote: "오늘 하나는 내일 둘의 가치가 있다.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "실패도 배우는 것이 있으면 성공이다.",
    author: "말콤 포브스",
  },
  {
    quote: "시간은 언제 까지든 당신을 기다리는 것은 아니다.",
    author: "짐멜",
  },
  {
    quote: "오늘 죽을 것처럼 행동하고 영원히 살 것처럼 배워라.",
    author: "마하트마 간디",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
