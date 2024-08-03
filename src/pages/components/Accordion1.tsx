import { FaMinus, FaPlus } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const data = [
  {
    title: "acc1",
    description:
      "desription acc1 saut Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, animi tempore aspernatur beatae nihil sequi, odit dolore deserunt sunt voluptate obcaecati voluptatum soluta nisi ut rerum, quos assumenda! Dicta, optio!",
  },
  { title: "acc2", description: "desription acc2" },
  {
    title: "acc3",
    description:
      "desription acc3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non adipisci aliquid perferendis ut, natus error impedit molestias illo quae cum!",
  },
];

export default function Accordion1() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col sm:flex-row gap-2">
        <Acc1 />
        <Acc2 />
      </div>
    </section>
  );
}

function Acc1() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleAction = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="w-[300px] border rounded p-2">
      {data.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleAction(index)} className="p-2 border w-full flex justify-between items-center">
            {item.title}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: expanded === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {expanded === index ? <FaMinus /> : <FaPlus />}
            </motion.div>{" "}
          </button>
          <AnimatePresence>
            {expanded === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {item.description}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function Acc2() {
  const [expanded, setExpanded] = useState<number[]>([]);

  const toggleAction = (index: number) => {
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((i) => i !== index));
    } else {
      setExpanded([...expanded, index]);
    }
  };

  return (
    <div className="w-[300px] border rounded p-2">
      {data.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleAction(index)} className="p-2 border w-full flex justify-between items-center">
            {item.title}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: expanded.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {expanded.includes(index) ? <FaMinus /> : <FaPlus />}
            </motion.div>{" "}
          </button>
          <AnimatePresence>
            {expanded.includes(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {item.description}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
