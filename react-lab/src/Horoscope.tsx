import React, {useState} from 'react';
// @ts-ignore
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import axios from 'axios';
import TextBox from './TextBox';

function Horoscope() {
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");
    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const toSend = {
            sun: sun,
            moon: moon,
            rising: rising
        }
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }
        axios.post("http://localhost:4567/horoscope", toSend, config).then(response => {
                console.log(response.data);
                setHoroscope(response.data["horoscope"]);
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div className="Horoscope">
            <TextBox label="Sun Sign" change={setSun}/>
            <TextBox label="Moon Sign" change={setMoon}/>
            <TextBox label="Rising" change={setRising}/>
            <AwesomeButton type="primary" onPress={requestHoroscope}>
                Submit
            </AwesomeButton>
            <div id = "horoscope">
                {horoscope.map((item) => {
                    return (
                        <p>{item}</p>
                    )
                })}
            </div>
        </div>
    );
}

export default Horoscope;