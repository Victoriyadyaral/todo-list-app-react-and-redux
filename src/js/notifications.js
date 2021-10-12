import { toast } from 'react-toastify';

const notifications = {
    success() {
         toast.success("Success. Your note is created");
    },

    error() {
        toast.error("No notes were created. Please enter a title or content and choose the category of the note!");
    },
    warning() {
        toast.warning("Deleted!");
    },
    successAdd() {
        toast.info("Todo Added, success!")
    }
}

export default notifications;