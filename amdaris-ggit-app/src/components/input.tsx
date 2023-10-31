import React, { useState } from 'react';

interface InputProps {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const Input: React.FC<InputProps> = ({ items, setItems }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (itemToDelete: string) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToDelete));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSubmit}>add item</button>
      </div>
      <div className="item-list-container">
        {items.length > 0 &&
          items.map((item) => (
            <div className="item" key={item}>
              {item}
              <button onClick={() => handleDelete(item)}>X</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Input;
