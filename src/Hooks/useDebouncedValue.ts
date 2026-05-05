import { useEffect, useState } from "react";

export function useDebouncedValue<T>(
    value: T,
    delay: number
): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Clear timer if value changes again before delay ends
        return () => {
            clearTimeout(timerId);
        };
    }, [value, delay]);

    return debouncedValue;
}