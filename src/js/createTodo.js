import shortid from 'shortid';
import notifications from './notifications.js';
import getDate from './get-date';

const { getCurrentDay, getDatesFromStr } = getDate;

const createTodo = (contentText, titleText, categoryOption) => {

        const newTodo = {
            id: shortid.generate(),
            content: contentText,
            created: getCurrentDay(),
            isArchived: false,
            title: titleText,
            category: categoryOption,
            dates: getDatesFromStr(contentText),
        };
        notifications.success();
        return newTodo;
}

export default createTodo;