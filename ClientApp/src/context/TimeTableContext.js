import React, { useEffect, useState } from "react";

export const TimeTableContext = React.createContext();

export const TimeTableProvider = ({ children }) => {

    const [semOne, setSemOne] = useState({})
    const [semTwo, setSemTwo] = useState({})
    const [semThree, setSemThree] = useState({})

    const [faculties, setFaculties] = useState([])

    const [roomNumbers, setRoomNumber] = useState([15, 16, 17, 18, 19])

    useEffect(() => {
        setSemOne({
            ...semOne,
            timeTable: [],
            subject: ['c', 'html', 'maths', 'fos']
        })
        setFaculties(['Parth Joshi', 'Muqit Khan', 'Poonam Mam', 'Vikas Ghokale'])
    }, []);

    return (
        <TimeTableContext.Provider value={{ semOne, setSemOne, faculties, setFaculties, roomNumbers, setRoomNumber }}>{children}</TimeTableContext.Provider>
    );
};