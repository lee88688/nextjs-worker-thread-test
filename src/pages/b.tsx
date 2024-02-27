import { useEffect } from "react";

function calculate(a: number, b: number) {
    return a + b;
}

export default function B() {
    useEffect(() => {
        calculate(1, 2)
    }, [])
    
    return <div>B</div>
}

export function getServerSideProps() {
    return {
        props: {
            a: 1,
            b: 2,
        }
    }
}