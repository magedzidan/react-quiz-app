import { useState, useEffect } from "react";

export function LoadingBar({ HandleTimer, answered,speed }) {
    const [filled, setFilled] = useState(0);
    const [Answered, setAnswered] = useState(answered);

    useEffect(() => {
        let timeoutId;
        if (filled < 100 && !answered) {
            timeoutId = setTimeout(() => setFilled(prev => prev + 5),speed?60: 300);
        }
        else if (filled === 100 && !answered) {
            HandleTimer(true);
            setFilled(0);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [filled, Answered, answered, HandleTimer]);

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div style={{
                width: "80%",
                height: "10px",
                backgroundColor: "#e0e0e0",
                borderRadius: "1rem",
                overflow: "hidden"
            }}>
                <div style={{
                    height: "100%",
                    width: `${filled}%`,
                    background: "linear-gradient(30deg, #e781fb 10%, #8e76fa 60%)",
                    transition: "width 0.5s",
                    borderRadius: "1rem"
                }}></div>
            </div>
        </div>
    );
}