import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

type ThemeToggleProps = {};

const ThemeToggle = ({}: ThemeToggleProps) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <select
            value={theme}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                event.preventDefault();
                setTheme(event.target.value);
            }}
        >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
        </select>
    );
};

export { ThemeToggle };
