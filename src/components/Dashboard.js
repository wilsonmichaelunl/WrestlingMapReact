import React from 'react'
import {L, Icon} from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { WrestlerContext } from '../context/context';
import YearDropdown from './YearDropdown';
import StateTable from './StateTable';
import SingleYearTable from './SingleYearTable'

const Dashboard = () => {
    const centerPosition = [37.2242, -95.7083]
    const {champions, year, isAllYears} = React.useContext(WrestlerContext);

    return (
        <article className="dashboard-container">
            <YearDropdown />
            <div className="dashboard">
                <div className="table-container">
                    {isAllYears ? <StateTable /> : <SingleYearTable />}
                </div>
                <div className="map-container">               
                    <MapContainer center={centerPosition} zoom={4} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {champions.map((champion, index) => {
                            return (
                            <Marker key={index} position={[champion.latitude, champion.longitude]}>
                                <Popup>
                                {champion.name} <br />
                                Hometown: {champion.hometown} <br />
                                Team: {champion.team} <br />
                                {champion.yearsChampion ? <>Years Champion: {champion.yearsChampion} <br /> </> : <> Weight Class: {champion.weight} <br /></>}
                                {champion.wrestleStat ? <>WrestleStat: <a href={champion.wrestleStat} target="_blank" rel="noopener noreferrer">{champion.wrestleStat}</a> </> 
                                : <>WrestleStat: No WrestleStat available. </>}
                                </Popup>
                            </Marker>
                            )
                        })}
                    </MapContainer>
                </div>  
            </div>
        </article>
    )
}

export default Dashboard
