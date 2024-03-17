import { useEffect, useState } from "react"


function C1() {
    const [sayac, setSayac] = useState(0);
    useEffect(() => {
        const surekLiIslem1 = setInterval(() => console.log('started'), 2000);

        return () => {
            clearInterval(surekLiIslem1);
            console.log('Interval temizlendi....')
        }
    }, []);

    return (
        <>
            <div className="p-3 m-3 bg-success-subtle">
                C1 Komponenti
                <button className="btn btn-outline-danger" onClick={() => setSayac(eskiDeger => eskiDeger + 5)}>{sayac}</button>
            </div>
        </>
    )
}

export default C1;