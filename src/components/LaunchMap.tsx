import { useEffect, useReducer, useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import { BounceLoader } from 'react-spinners';
import reducer from '../store/reducer';
import Inputs from "./Inputs/Inputs";
import { getAgencies, getLaunches } from '../api/apiHandler';


const LaunchMap = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setSuccessful] = useState<boolean>(false);
    const [agencies, setAgencies] = useState<string[]>([]);
    const [launches, setLaunches] = useState<any[]>([]);
    const [selectedLaunch, setSelectedLaunch] = useState<any>();
    const now = new Date();
    const next3Months = new Date(now.setMonth(now.getMonth() + (3 % 12)));
    const [formData, dispatch] = useReducer(reducer, {
        windowStart: new Date().toISOString(),
        windowEnd: next3Months.toISOString(),
        agency: '',
    });

    useEffect(() => {
        const controller = new AbortController();
        getAgencies({
            signal: controller.signal,
            setState: setAgencies
        });

        return () => {
        controller.abort();
        };
    }, []);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        getLaunches({
        windowStart: formData.windowStart,
        windowEnd: formData.windowEnd,
        signal: controller.signal,
        status: status ? 3 : undefined,
        setState: setLaunches
        }).finally(() => setLoading(false))

        return () => {
        controller.abort();
        };
    }, [formData, status]);

    return (
        <>
            <Inputs dispatch={dispatch} setSuccessful={setSuccessful} formData={formData} agencies={agencies} />
            {loading ? <BounceLoader color="#000000" cssOverride={{'margin': '0 auto'}} /> : (
                <Map height={300} defaultCenter={[0, 0]} defaultZoom={1}>
                    {launches.map((launch: any) => (
                        <Marker
                            key={launch.id}
                            width={30}
                            anchor={[Number(launch.pad.latitude), Number(launch.pad.longitude)]}
                            onClick={() => setSelectedLaunch(launch)}
                        />
                    ))}
                </Map>
            )}
            {selectedLaunch && (
                <div>
                    <p>{selectedLaunch.name}</p>
                    <p>{selectedLaunch.pad.name}</p>
                    <p>{selectedLaunch.window_start}</p>
                    <p>{selectedLaunch.window_end}</p>
                </div>
            )}
      </>
    );
}

export default LaunchMap;