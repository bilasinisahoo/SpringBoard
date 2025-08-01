const items =[];
export function addItem(item){
    items.push(item);
    console.log(items);
};

export function removeItems(item){
    const  index= items.indexOf(item);
      let isRemoved = false;

    if (index !== -1){
        items.splice(index, 1);
        isRemoved = true;
    }
    console.log(isRemoved);

}

export const listItems = () =>
{
	console.log(`Listing all items:`);

	for (const item of items)
	{
		console.log(`* ${item}`);
	}
};