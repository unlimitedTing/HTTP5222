const items = ["apples", "oranges", "cherries"];

// Public API
const addItem = (item) => {
    items.push(item);
};

const getItemCount = () => {
    return items.length;
};

export { addItem, getItemCount };