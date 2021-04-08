import React, { useState, useEffect } from 'react';
import defaultChampionInfo from './defaultData/defaultChampionInfo';
import defaultTableInfo from './defaultData/defaultTableInfo'
import axios from 'axios';

const rootUrl = 'https://localhost:44349/api';

const WrestlerContext = React.createContext();

const WrestlerProvider = ({children}) => {
    const [champions, setChampions] = useState(defaultChampionInfo);
    const [tableInfo, setTableInfo] = useState(defaultTableInfo);
    const [year, setYear] = useState(2021);
    const [isAllYears, setIsAllYears] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const getChampions = async(selectedYear) => {
        if (selectedYear !== 0) {
            setYear(selectedYear);
            const response = await axios(`${rootUrl}/dashboard/champions/${selectedYear}`)
                .catch(err => console.log(err));

            const table = await axios(`${rootUrl}/dashboard/table/${selectedYear}`)
                .catch(err => console.log(err));

            setTableInfo(table.data);
            setChampions(response.data);
            setIsAllYears(false);
        }

        if (selectedYear === 0) {
            const response = await axios(`${rootUrl}/dashboard/champions/`)
                .catch(err => console.log(err));

            const table = await axios(`${rootUrl}/dashboard/table`)
                .catch(err => console.log(err));

            setChampions(response.data);
            setTableInfo(table.data);
            setIsAllYears(true);
        }
    }

    return <WrestlerContext.Provider
        value={{champions: champions, year: year, isAllYears: isAllYears, getChampions: getChampions, tableInfo: tableInfo}}>{children}
    </WrestlerContext.Provider>
};

export { WrestlerProvider, WrestlerContext };