import { ImPencilk, ImBoxAdd, ImBoxRemove, ImBin} from "react-icons/im";

import TodoTableColumn from "../TableColumn/TableColum";

const notArchivedColums = ['Name', 'Created', 'Category', 'Content', 'Dates']
const TodoTable = () => {

    return (
        <table>
            <TodoTableColumn columns={notArchivedColums} />
        </table>
    );
};

export default TodoTable;