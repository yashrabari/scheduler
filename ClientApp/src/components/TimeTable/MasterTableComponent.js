import * as React from 'react';


//UI lib
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';




//Context
import { TimeTableContext } from '../../context/TimeTableContext';








export default function MasterTableComponent() {


    const { semOne, setSemOne, roomNumbers, setRoomNumber, faculties, setFaculties, } = React.useContext(TimeTableContext)



    const [age, setAge] = React.useState(0)
    const [days, setDays] = React.useState(semOne.days);
    const [selectedCell, setSelectedCell] = React.useState({})
    const [dates, setDates] = React.useState(semOne.dates);
    const [lectures, setLectures] = React.useState(semOne.lectures);
    const [lectureNumbers, setLectureNumbers] = React.useState(semOne.lectureNumbers);


    //handling temp values of inputs
    const [divOne, setDivOne] = React.useState({})
    const [divTwo, setDivTwo] = React.useState({})



    const [isDisabledButtonCreate, setIsDisabledButtonCreate] = React.useState(true)



    const [open, setOpen] = React.useState(false);


    const handleClickOpen = (num, date) => {
        setSelectedCell({ num, date })
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const addDays = (event) => {
        setDays(event.target.value)
        lectures && setIsDisabledButtonCreate(false)

        var arr = []


        for (let index = 1; index <= event.target.value; index++) {

            var date = new Date(new Date().getTime() + (index * 24 * 60 * 60 * 1000))

            arr.push(date.toString().slice(0, 15))
        }
        setDates(arr)

        setSemOne({
            ...semOne,
            days: event.target.value,
            dates: arr,
        })
    }



    const addLectures = (event) => {
        setLectures(event.target.value)
        days && setIsDisabledButtonCreate(false)


        var arr = []

        for (let index = 1; index <= event.target.value; index++) {
            arr.push(index)
        }

        setLectureNumbers(arr)
        setSemOne({
            ...semOne,
            lectures: event.target.value,
            lectureNumbers: arr,
        });
    }






    function InputTableData({ handleFacultyChange, handleSubjectChange, handleClassRoomChange }) {
        return (
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-dialog-select-label">Subject</InputLabel>
                    <Select
                        labelId="demo-dialog-select-label"
                        id="demo-dialog-select"
                        value={age}
                        onChange={handleFacultyChange}
                        input={<OutlinedInput label="Subject" />}
                    >
                        {
                            faculties.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>

                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-dialog-select-label">Subject</InputLabel>
                    <Select
                        labelId="demo-dialog-select-label"
                        id="demo-dialog-select"
                        value={age}
                        onChange={handleSubjectChange}
                        input={<OutlinedInput label="Subject" />}
                    >
                        {
                            semOne.subject.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>

                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-dialog-select-label"
                        id="demo-dialog-select"
                        value={age}
                        onChange={handleClassRoomChange}
                        input={<OutlinedInput label="Age" />}
                    >
                        {
                            roomNumbers.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>

                            ))
                        }
                    </Select>
                </FormControl>

            </div>
        )
    }


    const handleCreate = () => {
        const cell = selectedCell.num + " " + selectedCell.date

        var temp = semOne.timeTable

        temp.push({ cell, divOne, divTwo })


        setSemOne({
            ...semOne,
            timeTable: temp
        })



        setOpen(false);
    }

    return (
        <Container>

            {/**Modal For Select */}

            <div>
                <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                    <DialogTitle>{selectedCell.num + " lecture" + " " + selectedCell.date}</DialogTitle>
                    <DialogContent>
                        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <FormControl sx={{ m: 1, minWidth: 120, height: 50, justifyContent: 'center', padding: '16.5px 14px' }}>
                                <FormLabel>
                                    Division 1
                                </FormLabel>
                            </FormControl>
                            <InputTableData
                                handleClassRoomChange={(event) => {
                                    setDivOne({
                                        ...divOne,
                                        classRoom: event.target.value
                                    })
                                }}
                                handleFacultyChange={(event) => {
                                    setDivOne({
                                        ...divOne,
                                        faculty: event.target.value
                                    })
                                }}
                                handleSubjectChange={(event) => {
                                    setDivOne({
                                        ...divOne,
                                        subject: event.target.value
                                    })
                                }}
                            />
                        </Box>
                        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <FormControl sx={{ m: 1, minWidth: 120, height: 50, justifyContent: 'center', padding: '16.5px 14px' }}>
                                <FormLabel>
                                    Division 2
                                </FormLabel>
                            </FormControl>
                            <InputTableData
                                handleClassRoomChange={(event) => {
                                    setDivTwo({
                                        ...divTwo,
                                        classRoom: event.target.value
                                    })
                                }}
                                handleSubjectChange={(event) => {
                                    setDivTwo({
                                        ...divTwo,
                                        subject: event.target.value
                                    })
                                }}
                                handleFacultyChange={(event) => {
                                    setDivTwo({
                                        ...divTwo,
                                        faculty: event.target.value
                                    })
                                }}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleCreate}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </div>









            <Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Days</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"

                        value={days}
                        label="Days"
                        onChange={(event) => {
                            addDays(event)
                        }}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                    </Select>

                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">lectures</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"

                        value={lectures}
                        label="lectures"
                        onChange={(event) => {
                            addLectures(event)
                        }}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>

                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Button style={{ padding: '16.5px 14px' }} variant="contained" disabled={isDisabledButtonCreate}>Save Table</Button>
                </FormControl>
            </Box>

            <Box style={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ width: 125, height: 100, margin: '5px 5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >

                </Box>
                {
                    dates?.map((date, index) => (
                        <div>
                            <Box key={index} sx={{ width: '125px !important', height: 100, margin: '5px 5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <span style={{ textAlign: 'center' }}>{date}</span>
                            </Box>
                        </div>
                    ))
                }
            </Box>
            {
                lectureNumbers?.map((num, indexOfLectures) => (
                    <>
                        <Box key={indexOfLectures} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Box sx={{ width: 125, height: 100, margin: '5px 5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <span>{num} lecture</span>
                            </Box>
                            {

                                dates?.map((date, indexOfDate) => {


                                    var data = semOne.timeTable.find(o => o.cell == num + " " + date)


                                    return (
                                        <div key={indexOfDate} >
                                            <Box
                                                sx={{
                                                    width: 135,
                                                    height: 110,
                                                    bgcolor: 'white.light',
                                                    borderBottom: indexOfLectures === lectureNumbers.length - 1 ? null : '1px solid gray',
                                                    borderRight: indexOfDate === dates.length - 1 ? null : '1px solid gray',
                                                    '&:hover': {
                                                        backgroundColor: 'primary.main',
                                                        opacity: [0.9, 0.8, 0.7],
                                                    },
                                                }}


                                                onClick={() => { handleClickOpen(num, date) }}

                                            >

                                                <div style={{ display: 'flex', padding: '10px', height: '100%', width: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <span>Division 1</span>
                                                        <span>Subject :{data ? data.divOne.subject : " "}</span>
                                                    </div>
                                                    <div>
                                                        <span>Division 2</span>
                                                    </div>
                                                </div>
                                            </Box>
                                        </div>
                                    )

                                })
                            }

                        </Box>

                    </>
                ))
            }


        </Container>
    );
}
