import React, {useState} from 'react'
import { WrestlerContext } from '../context/context';

const YearDropdown = () => {
    const {year ,getChampions} = React.useContext(WrestlerContext);
    const [dropdownValue, setDropdownValue] = useState("0");

    const handleChange = (e) => {
        setDropdownValue(parseInt(e.target.value));
        getChampions(parseInt(e.target.value));
    };

    return (
        <section>
            <div>
                <label className="custom-label"> Select Year: </label>               
                <select className="custom-select" value={dropdownValue} onChange={(e) => handleChange(e)}>                        
                        <option value="0">2010-Present</option>
                        <option value="2021">2021</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                </select>
            </div>
        </section>
    )
}

export default YearDropdown

