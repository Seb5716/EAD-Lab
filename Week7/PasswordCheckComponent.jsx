import { useState } from "react";

function PasswordChecker() {
    const [password, setPassword] = useState("");

    function getStrength(p) {
        let score = 0;
        if (p.length >= 8)       score++;
        if (/[A-Z]/.test(p))     score++;
        if (/[0-9]/.test(p))     score++;
        if (/[!@#$%^&*]/.test(p)) score++;

        if (score <= 1) return "Weak";
        if (score <= 3) return "Medium";
        return "Strong";
    }

    return (
        <div>
            <label>
                <pre>Password: </pre>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
            </label>
            {password && <p> Strength: {getStrength(password)} </p>}
        </div>
    );
} export default PasswordChecker;