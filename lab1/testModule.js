import { addItem, getItemCount } from './itemsModule.js';

console.log("Before add Item:"+getItemCount()); 
addItem('bananas');
console.log("After add Item:"+getItemCount());