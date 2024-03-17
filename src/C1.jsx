import { useEffect, useState } from "react"

function C1() {
    const [sayac, setSayac] = useState(0);
    const [baglanti, setBaglanti] = useState(navigator.onLine);
    
    useEffect(() => {
        function pencereDegisti(event) {
            const yatayMi = (event.target.innerWidth / event.target.innerHeight) > 1 ? true : false;
            console.log(yatayMi ? 'Yatay ekran' : "Dikey ekran");
        }

        window.addEventListener('resize',pencereDegisti);
        return () => {
            window.removeEventListener('resize', pencereDegisti);
        }
    }, []);

    useEffect(() => {
        const surekLiIslem = setInterval(() => {
            setBaglanti(navigator.onLine);
        }, 1000); 
        return () => {
            clearInterval(surekLiIslem);
        }       
    }, [])
    return (
        <>
            <div className="p-3 m-3 bg-success-subtle">
                C1 Komponenti
                <button className="btn btn-outline-danger" onClick={() => setSayac(eskiDeger => eskiDeger + 5)}>{sayac}</button>
            </div>
            { !baglanti?
            <div className="alert alert-danger p-3 position-fixed">
                Baglanti Kesildi!
            </div> : ""
            } 
        </>
    )
}

export default C1;