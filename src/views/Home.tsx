import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HERO_TEXTS = [
  { title: "그런과 함께 뛰다", sub: "함께 뛰는 즐거움으로 일상을 채웁니다." },
  { title: "한 걸음 한 걸음", sub: "꾸준함이 만드는 변화를 믿습니다." },
  { title: "함께라서 더 멀리", sub: "크루와 함께하면 어디든 갈 수 있습니다." },
];

const WHY_BOXES = [
  { title: "크루 취지&소개", key: "intro" },
  { title: "참여 방식", key: "join" },
  { title: "크루 규칙", key: "rules" },
  { title: "러닝 준비물", key: "gear" },
  { title: "런닝 앱 추천", key: "app" },
  { title: "러닝 코스 추천", key: "course" },
];

const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
  "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
  "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=800&q=80",
  "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
  "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80",
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80",
];

const SECTION_TITLE_CLASS =
  "text-3xl md:text-4xl lg:text-5xl font-bold text-center text-neutral-800";

const BANNER_IMAGES = [
  "/Grun_main_Benner_CGC.jpg",
  "/Grun_main_Benner_CGC2.jpg",
  "/Grun_main_Benner_GHM.jpg",
  "/Grun_main_Benner_HG.jpg",
];

const SLIDE_INTERVAL_MS = 4500;

function HeroBanner() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [logoNum, setLogoNum] = useState<1 | 2>(1);
  useEffect(() => {
    const t = setInterval(
      () => setSlideIndex((s) => (s + 1) % BANNER_IMAGES.length),
      SLIDE_INTERVAL_MS
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full min-h-[100vh] flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-[5px] text-white bg-black/30 backdrop-blur-sm border-b border-white">
        <button
          type="button"
          onClick={() => setLogoNum((n) => (n === 1 ? 2 : 1))}
          className="focus:outline-none"
          aria-label="로고 전환"
        >
          <img
            src={logoNum === 1 ? "/Grun_Logo_1.png" : "/Grun_Logo_2.png"}
            alt="그런 GRun 로고"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </button>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#why-we-run" className="hover:underline">
            Why We Run
          </a>
          <a href="#calendar" className="hover:underline">
            캘린더
          </a>
        </nav>
        <a
          href="https://smore.im/form/0vLmzphXcN"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-white rounded text-sm hover:bg-white hover:text-black transition-colors"
        >
          문의하기
        </a>
      </header>

      <div className="absolute inset-0 z-0">
        {BANNER_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: slideIndex === i ? 1 : 0,
              zIndex: slideIndex === i ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 z-[1]" aria-hidden />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center text-white pt-12">
        <div className="relative min-h-[6rem] md:min-h-[8rem] flex items-center justify-center w-full max-w-4xl">
            {HERO_TEXTS.map((item, i) => (
              <div
                key={item.title}
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 md:gap-3"
                style={{
                  opacity: slideIndex % HERO_TEXTS.length === i ? 1 : 0,
                  visibility: slideIndex % HERO_TEXTS.length === i ? "visible" : "hidden",
                  transition: "opacity 0.8s ease",
                }}
              >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap">
                {item.title}
              </h2>
              <p className="text-base md:text-xl text-white/90 whitespace-nowrap">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm uppercase tracking-widest text-white/80">
          SCROLL DOWN
        </p>
        <a
          href="#why-we-run"
          className="scroll-down-arrow mt-2 inline-block text-white/80"
          aria-label="아래로 스크롤"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
        <a
          href="https://smore.im/form/0vLmzphXcN"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-8 py-3 bg-white text-black font-medium rounded hover:bg-white/90 transition-colors"
        >
          문의하기
        </a>
      </div>
    </section>
  );
}

function WhyWeRunSection() {
  return (
    <section id="why-we-run" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className={`${SECTION_TITLE_CLASS} mb-12 md:mb-16`}>
          Why We Run?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {WHY_BOXES.map((box, i) => (
            <Link
              key={box.key}
              to={`/why-we-run/${box.key}`}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow block"
              aria-label={`${box.title} 페이지로 이동`}
            >
              <div className="aspect-[4/3] relative bg-neutral-200 overflow-hidden">
                <img
                  src={PLACEHOLDER_IMAGES[i] ?? PLACEHOLDER_IMAGES[0]}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-neutral-800">
                  {box.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const RUNNING_COURSES = [
  {
    name: "광화문",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900&q=80",
    key: "gwanghwamun",
  },
  {
    name: "북촌",
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&q=80",
    key: "bukchon",
  },
  {
    name: "경리단길",
    img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=900&q=80",
    key: "gyeongridan",
  },
];

function CalendarSection() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setYear(now.getFullYear());
      setMonth(now.getMonth());
    };
    const id = setInterval(tick, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const weeks: number[][] = [];
  let week: number[] = [];
  for (let i = 0; i < firstDay; i++) week.push(0);
  for (let d = 1; d <= daysInMonth; d++) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(0);
    weeks.push(week);
  }

  const monthNames = [
    "1월", "2월", "3월", "4월", "5월", "6월",
    "7월", "8월", "9월", "10월", "11월", "12월",
  ];

  return (
    <section id="calendar" className="min-h-[100vh] w-full flex flex-col bg-white">
      <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center py-6 md:py-8">
        <h2 className={`${SECTION_TITLE_CLASS} mb-4 md:mb-6 text-2xl md:text-3xl`}>캘린더</h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch justify-center max-w-7xl mx-auto">
          <div className="w-full lg:flex-1 lg:max-w-[840px] flex flex-col bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden shrink-0">
            <div className="flex items-center justify-between p-6 md:p-9 bg-neutral-50 border-b border-neutral-200 shrink-0">
              <button
                type="button"
                onClick={() => {
                  if (month === 0) {
                    setMonth(11);
                    setYear((y) => y - 1);
                  } else setMonth((m) => m - 1);
                }}
                className="p-4 rounded-lg hover:bg-neutral-200 text-2xl font-medium"
                aria-label="이전 달"
              >
                ←
              </button>
              <span className="text-2xl md:text-3xl font-bold text-neutral-800">
                {year}년 {monthNames[month]}
              </span>
              <button
                type="button"
                onClick={() => {
                  if (month === 11) {
                    setMonth(0);
                    setYear((y) => y + 1);
                  } else setMonth((m) => m + 1);
                }}
                className="p-4 rounded-lg hover:bg-neutral-200 text-2xl font-medium"
                aria-label="다음 달"
              >
                →
              </button>
            </div>
            <div className="p-6 md:p-9 flex-1 flex flex-col min-h-0">
              <table className="w-full border-collapse table-fixed flex-1">
                <thead>
                  <tr className="text-neutral-600 font-semibold text-base md:text-lg">
                    <th className="border border-neutral-300 bg-neutral-100 py-3">일</th>
                    <th className="border border-neutral-300 bg-neutral-100 py-3">월</th>
                    <th className="border border-neutral-300 bg-neutral-100 py-3">화</th>
                    <th className="border border-neutral-300 bg-neutral-100 py-3">수</th>
                    <th className="border border-neutral-300 bg-neutral-100 py-3">목</th>
                    <th className="border border-neutral-300 bg-neutral-100 py-3">금</th>
                    <th className="border border-neutral-300 bg-neutral-100 py-3">토</th>
                  </tr>
                </thead>
                <tbody>
                  {weeks.map((row, i) => (
                    <tr key={i}>
                      {row.map((d, j) => (
                        <td
                          key={j}
                          className={`border border-neutral-300 align-top text-left ${
                            today.getDate() === d &&
                            today.getMonth() === month &&
                            today.getFullYear() === year
                              ? "bg-neutral-800 text-white font-medium"
                              : `bg-white text-neutral-800 ${j === 0 ? "text-red-600" : ""} ${j === 6 ? "text-blue-600" : ""}`
                          }`}
                          style={{
                            height: "6.5rem",
                            minHeight: "6.5rem",
                          }}
                        >
                          {d !== 0 ? (
                            <span className="inline-block pt-2 pl-3 text-base md:text-lg">
                              {d}
                            </span>
                          ) : null}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full lg:w-[16.5rem] flex flex-col gap-3 min-h-0">
            {RUNNING_COURSES.map((course) => (
              <div
                key={course.key}
                className="flex-1 min-h-0 flex flex-col rounded-xl overflow-hidden shadow-lg bg-white border border-neutral-200"
              >
                <div className="flex-1 min-h-0 min-h-[4.5rem] overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="py-2 px-4 bg-neutral-50 text-neutral-800 font-medium text-center text-base md:text-lg shrink-0 border-t border-neutral-100">
                  {course.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <WhyWeRunSection />
      <CalendarSection />
      <footer
        id="contact"
        className="py-8 bg-neutral-800 text-white text-center text-sm"
      >
        <p>그런 GRun · 문의하기</p>
      </footer>
    </main>
  );
}
