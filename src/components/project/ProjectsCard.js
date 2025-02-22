import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
function ProjectCard({ id, name, budget, category, handleRemove }) {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Budget: R${budget}</span>
            </p>
            <p className={styles.category_text} >
                <span className={`${styles[category.toLocaleLowerCase()]}`}></span>{category}
            </p>

            <div className={styles.project_card_actions}>
                <Link to={`/project/${id}`}>
                    <BsPencil /> Edit
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Remove
                </button>

            </div>
        </div>
    )
}

export default ProjectCard