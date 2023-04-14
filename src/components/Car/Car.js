const Car = ({car,serCarForUpdate}) => {
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>serCarForUpdate(car)}>update</button>
        </div>
    );
};

export {Car};
