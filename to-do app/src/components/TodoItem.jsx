import { HiHandThumbUp} from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";

const TodoItem = ({ todo, toggle, deleteTodo }) => {
return <div className="w-full flex items-center  p-2 gap-3 cursor-pointer px-4 py-4 border-b" onClick={() => toggle(todo.id)} >
    <HiHandThumbUp className="text-[#27374D] size-5 hover:scale-120 transition-all" />
    <p className="flex-1 text-[#F1F7D4]">{todo.text}</p> 
    
    <RiDeleteBinLine onClick={()=> deleteTodo(todo.id)} className="text-[#D92243] size-5 hover:scale-120 transition-all" />


</div>

}

export default TodoItem
