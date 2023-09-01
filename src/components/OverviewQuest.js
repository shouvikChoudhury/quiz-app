import { Button, ButtonGroup } from '@mui/material'
import React, { useState, useEffect } from 'react'

const OverviewQuest = ({ questions, visit, setvisit, setCurrQues, identity, setSelected }) => {

    const handleColor = (e) => {
        setvisit([...visit, e.target.value])
        setCurrQues(e.target.value)
        setSelected()
    }

    return (
        <>
            <ButtonGroup>
                <Button color="error" variant="contained" size="small">Visited</Button>
                <Button color="success" variant="contained" size="small">Attempted</Button>
                <Button color="secondary" variant="contained" size="small">Not Visited</Button>
            </ButtonGroup>
            <div style={{ marginBottom: "10px", marginTop: "15px" }}>

                {questions?.map((ele, index) => {
                    return (<Button color={identity?.includes((index).toString()) ? "success" : visit?.includes((index).toString()) ? "error" : "secondary"} variant="contained" size="small" onClick={handleColor} value={index}>{index + 1}</Button>)
                })}
            </div>
        </>
    )
}

export default OverviewQuest