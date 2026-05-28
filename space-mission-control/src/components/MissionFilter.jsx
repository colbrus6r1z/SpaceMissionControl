import styles from "./MissionAction.module.css";

function MissionFilter ({setFilter})
{
    const STATUSES = ["All", "Planned", "Active", "Completed"];

    return (
        <>
            {
                STATUSES.map((status, index) => (
                    <button
                        key={index}
                        className={styles.button}
                        onClick={() => setFilter(status)}
                    >
                        {status}
                    </button>
                ))
            }
        </>

    );
}
export default MissionFilter;