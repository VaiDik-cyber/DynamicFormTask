import { useState } from "react";

const useDynamicInputs = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  const [labels, setLabels] = useState(new Array(initialCount).fill(""));

  const handleCountChange = (newCount) => {
    setCount(newCount);
    if (newCount >= 1) {
      setLabels(new Array(newCount).fill(""));
    }
  };

  const handleLabelChange = (index, label) => {
    const updatedLabels = [...labels];
    updatedLabels[index] = label;
    setLabels(updatedLabels);
  };

  return {
    count,
    labels,
    handleCountChange,
    handleLabelChange,
  };
};

export default useDynamicInputs;
