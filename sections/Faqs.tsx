"use client"
import {Accordion, AccordionItem} from "@nextui-org/react";

const Faqs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 px-6 py-6">
        <h1 className="text-4xl font-bold">Any Questions ? Look here</h1>
        <Accordion className="max-w-[50%]">
            <AccordionItem className="text-xl" title="Question 1">
                <p className="text-lg">This will be the answer</p>
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