import {Accordion, AccordionItem} from "@nextui-org/react";

const Faqs = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#e4a5a5]">
        <h1 className="text-3xl font-bold">FAQs</h1>
        <Accordion>
            <AccordionItem title="Question 1">
                This will be the answer
            </AccordionItem>
            <AccordionItem title="Question 1">
                This will be the answer
            </AccordionItem>
            <AccordionItem title="Question 1">
                This will be the answer
            </AccordionItem>
            <AccordionItem title="Question 1">
                This will be the answer
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default Faqs