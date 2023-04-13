const Launch = ({launch}) => {
    const {flight_number, mission_name, launch_year,rocket:{rocket_id}} = launch;
    return (
        <div>
            <div>flight_number: {flight_number}</div>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <div>rocket_id: {rocket_id}</div>
        </div>
    );
};

export {Launch};
