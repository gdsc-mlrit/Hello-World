import { Logo911 } from "@/components/logo";

const Helloworld = () => {
  return (
    <main className="flex justify-center items-center gap-10 py-24">
      <Logo911 h={70} w={65} />
      <h1 className="text-[#6d6d6d] text-8xl font-semibold">
        This is <span className="text-white">Hello World</span>
        <span className="text-limee">.</span>
      </h1>
    </main>
  );
};

export default Helloworld;
