import { Fragment, useState } from "react";
import { ToastContainer } from "react-toastify";
import Quiz from "./components/Quiz/Quiz";
import Game from "./components/game/Game";

function App() {
  const options = [
    {
      title: "React bu . . .?",
      variants: ["Framework", "Library", "Database"],
      correct: 1,
    },
    {
      title: "React komponentlari qanday ishlaydi?",
      variants: [
        "Komponentlar faqat funksiyalar bo'lishi mumkin",
        "Har bir komponent bir class bo'lishi kerak",
        "Komponentlar ma'lumotlar saqlaydi",
      ],
      correct: 0,
    },
    {
      title: "JSX nima uchun ishlatiladi?",
      variants: [
        "JavaScript kodi uchun syntactic sugar",
        "CSS kodi uchun syntactic sugar",
        " HTML kodi uchun syntactic sugar",
      ],
      correct: 0,
    },
    {
      title: "Virtual DOM qanday ishlaydi?",
      variants: [
        "O'zgaruvchilarni saqlaydi",
        " UI-ni qayta yaratadi va o'zgaruvchilarni yechadi",
        "Faqat o'zgaruvchilarni tekshiradi",
      ],
      correct: 1,
    },
    {
      title: "React Router qanday ishlaydi?",
      variants: [
        "Ma'lumotlarni saqlaydi",
        "O'zgaruvchilarni tekshiradi",
        "Sayt navigatsiyasini boshqaradi",
      ],
      correct: 2,
    },
    {
      title: " State va props qanday farq qiladi?",
      variants: [
        "State komponentning ichidagi o'zgaruvchilar",
        "Props komponentlarni bir-biriga ulashish uchun ishlatiladi",
        "State barcha komponentlarda bir xil",
      ],
      correct: 0,
    },
    {
      title: "React Hooks qanday ishlaydi?",
      variants: [
        "Class komponentlarida ishlaydi",
        "Functional komponentlarida ishlaydi",
        "Redux bilan ishlaydi",
      ],
      correct: 1,
    },
    {
      title: "Controlled va Uncontrolled komponentlar qanday farq qiladi",
      variants: [
        "Controlled komponentlar barcha o'zgaruvchilarni boshqaradi",
        "Uncontrolled komponentlarda qiymatlar React state orqali boshqarilmaydi Controlled bunda esa boshqariladi",
        "Controlled komponentlar faqat funksiyalar bo'lishi mumkin",
      ],
      correct: 1,
    },
    {
      title: "React Context nima uchun ishlatiladi?",
      variants: [
        "Komponentlarni bir-biriga ulashish uchun",
        "O'zgaruvchilarni yechish uchun",
        "Komponentlar orasida ma'lumotlarni uzatish uchun",
      ],
      correct: 2,
    },
    {
      title: "React Redux nima uchun ishlatiladi?",
      variants: [
        "Komponentlarni bir-biriga ulashish uchun",
        "Ilova ichidagi ma'lumotlarni boshqarish uchun",
        "Virtual DOM-ni yaratish uchun",
      ],
      correct: 1,
    },
  ];

  const [step, setStep] = useState(0);
  const question = options[step];
  const [correct, setCorrect] = useState(0);

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <Fragment>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {step !== options.length ? (
        <Quiz
          options={options}
          question={question}
          onClickVariant={onClickVariant}
          step={step}
        />
      ) : (
        <Game correct={correct} options={options} />
      )}
    </Fragment>
  );
}

export default App;
