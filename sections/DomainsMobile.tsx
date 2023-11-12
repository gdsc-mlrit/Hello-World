import Aboutcomponent from "@/components/Aboutcomponent";
const data = [
  {
    logo: "gray_roc",
    questions: [
      "What are Startups?",
      "Startup Lifecycle",
      "Market Research",
      "How to Pitch?",
      "How to get startup ideas?",
    ],
    section: "Startups",
  },
  {
    logo: "gray_design",
    questions: [
      "What is Design?",
      "Design as a Career",
      "Elements of Graphic Design",
      "Graphic Design Principles",
      "Intro to UI/UX Design",
    ],
    section: "Design",
  },
  {
    logo: "gray_tech",
    questions: [
      "Intro to Computer Science?",
      "Development Lifecycle",
      "Various Computer Languages",
      "Generative AI",
      "Open source and Git",
    ],
    section: "Tech",
  },
];

const DomainsMobile = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16 my-16">
      {data.map((domain) => (
        <Aboutcomponent
          logo={domain.logo}
          section={domain.section}
          questions={domain.questions}
        />
      ))}
    </div>
  );
};

export default DomainsMobile;
