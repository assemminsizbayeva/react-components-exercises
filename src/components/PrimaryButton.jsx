
export function PrimaryButton({ label, type = "primary" }) {
    const buttonClass = type === "primary"
        ? "btn-primary"
        : "btn-secondary";

    return (
        <button className={`btn ${buttonClass}`}>
            {label}
        </button>
    );
}