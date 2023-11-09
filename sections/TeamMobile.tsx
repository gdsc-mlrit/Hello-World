import IdTagMobile from "@/components/IdTagMobile";
const images = [
  { id: "Dine", name: "Dinesh", tag: "Lead" },
  { id: "Reaper", name: "Adithya", tag: "Tech Lead" },
  { id: "Sherlock", name: "Nikhil", tag: "Design Lead" },
  { id: "Aditya2", name: "Adithya Vardhan", tag: "Core Member" },
  { id: "Moiz", name: "Moizuddin", tag: "Core Member" },
  { id: "Aditya2", name: "Adithya", tag: "Core Member" },
  { id: "sanjana", name: "Sanjana", tag: "Core Member" },
  { id: "Eswar", name: "Eshvvar", tag: "Core Member" },
  { id: "Abhiram", name: "Abhiram", tag: "Core Member" },
  { id: "Indra", name: "Indra", tag: "Core Member" },
  { id: "Aditya", name: "Venkata Adithya", tag: "Core Member" },
  { id: "siri", name: "Siri Valli", tag: "Core Member" },
  { id: "saiteja", name: "Sai Teja", tag: "Core Member" },
  { id: "Deepak", name: "Deepak", tag: "Core Member" },
  { id: "Karthikeya", name: "Kartikeya", tag: "Core Member" },
  { id: "nishitha", name: "Nishitha", tag: "Core Member" },
  { id: "varshita", name: "Varshitha", tag: "Core Member" },
];

const TeamMobile = () => {
  return (
    <div className="sm:hidden min-h-screen flex flex-wrap justify-center items-center bg-[#151515] gap-5">
      {images.map((element) => (
        <IdTagMobile
          key={element.name}
          image={`/profiles/${element.id}.png`}
          tag={element.tag}
          name={element.name}
        />
      ))}
    </div>
  );
};

export default TeamMobile;