import {useQuery} from "vue-query";


export default (id) => {
    return useQuery(["todos", {id}], async () => {
        let todoUrl = `https://jsonplaceholder.typicode.com/todos`;
        if (id !== undefined) {
            todoUrl += `/${id.value}`;
        }

        const response = await fetch(todoUrl);
        return response.json();
    });
};