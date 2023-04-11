const Simpson = ({simpson}) => {
    const {id, name, surname, age, info, photo} = simpson;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>age: {age}</div>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {Simpson};
