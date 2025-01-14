import Card from "@components/Card"
import React from "react"

const LandingPage: React.FC = () =>{
    return(
        <>
            <h1>Landing Page</h1>
            <Card onClick={()=>{console.log('clicked')}}>
                Button
            </Card>
        </>
    )
}
export default LandingPage