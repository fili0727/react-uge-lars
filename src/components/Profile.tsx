export default function Profile({ name, email, isActive, singleLine }: ProfileProps) {
    {if (singleLine) return (
        <div>
            <p>{name}, {email}, {isActive ? "Aktiv":"ikke Aktiv"}</p>
        </div>
    )}

    return (
        <>
            <h5>{name}</h5>
            <p>Mail: {email}</p>
            <p>{isActive ? "er Aktiv":"ikke Aktiv"}</p>
        </>
        )
}

interface ProfileProps {
    name: string;
    email: string;
    isActive: boolean;
    singleLine?: boolean;
}