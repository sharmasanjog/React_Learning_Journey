import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        fetch(`https://open.er-api.com/v6/latest/USD`)
            .then((res) => res.json())
            .then((res) => setData(res.rates))
            .catch((err) => console.error("Error fetching currency data:", err));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;