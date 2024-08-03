import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

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

export default function Accordion2() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center">
        <Acc1 />
        <Acc2 />
        <Acc3 />
        <Acc4 />
      </div>
    </section>
  );
}

function Acc1() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleAction = (index: number) => setExpanded(expanded === index ? null : index);

  return (
    <div className="w-[300px] border rounded p-2">
      {data.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleAction(index)} className="p-2 border w-full flex justify-between items-center">
            {item.title}
            {expanded === index ? <FaMinus /> : <FaPlus />}
          </button>
          {expanded === index && <p className="overflow-hidden">{item.description}</p>}
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
            {expanded.includes(index) ? <FaMinus /> : <FaPlus />}
          </button>
          {expanded.includes(index) && <p className="overflow-hidden">{item.description}</p>}
        </div>
      ))}
    </div>
  );
}

function Acc3() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleExpanded = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    const target = e.currentTarget as HTMLButtonElement;
    const content = target.nextElementSibling as HTMLElement;

    const allContents = document.getElementsByClassName("autoClose");
    for (let i = 0; i < allContents.length; i++) {
      (allContents[i] as HTMLElement).style.height = "0";
    }

    if (index === expanded) {
      setExpanded(null);
      content.style.height = "0";
    } else {
      setExpanded(index);
      content.style.height = content.scrollHeight + "px";
    }
  };

  return (
    <div className="w-[300px] border rounded p-2">
      {data.map((item, i) => (
        <div key={i}>
          <button onClick={(e) => handleExpanded(e, i)} className="p-2 border w-full flex justify-between items-center">
            {item.title}
          </button>
          <p className="autoClose h-0 overflow-hidden transition-all duration-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

const Acc4 = () => {
  const handleExpanded = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLButtonElement;
    const content = target.nextElementSibling as HTMLElement;

    content.classList.toggle("buka");
    if (content.classList.contains("buka")) {
      content.style.height = content.scrollHeight + "px";
    } else {
      content.style.height = "0";
    }
  };

  return (
    <div className="w-[300px] border rounded p-2">
      {data.map((item, i) => (
        <div key={i}>
          <button onClick={handleExpanded} className="p-2 border w-full flex justify-between items-center">
            {item.title}
          </button>
          <p className={`h-0 overflow-hidden transition-all duration-500"`}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
