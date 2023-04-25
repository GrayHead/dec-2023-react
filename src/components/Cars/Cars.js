import {useEffect} from "react";
import {carService} from "../../services/car.service";
import {Car} from "../Car/Car";
import {useAppReducer} from "../../hooks/useAppReducer";
import {carActions} from "../../reducers/car.reducer";

const Cars = () => {
    const [{cars, trigger}, dispatch] = useAppReducer((state)=>state.cars);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => dispatch(carActions.setAll(value)))
    }, [dispatch, trigger])

    return (
        <div>
            <hr/>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
