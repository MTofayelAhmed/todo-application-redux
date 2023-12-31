import noteImage from "../assets/image/notes.png";
import tickImage from "../assets/image/double-tick.png";
import PlusImage from "../assets/image/plus.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";

const Header = () => {

  const disPatch = useDispatch();
  const [input, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    disPatch(added(input));
    setInput("")
  };



  const handleInput = (e) => {
    setInput(e.target.value);
  }
  const handleCompleted = ()=> {
    disPatch(allCompleted())
  }

  const handleClearCompleted = ()=> {
    disPatch(clearCompleted())
  }


  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          value={input}
          onChange={handleInput}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${PlusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li onClick={handleCompleted} className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer"onClick={clearCompleted} >Clear completed</li>
      </ul>
    </div>
  );
};

export default Header;
