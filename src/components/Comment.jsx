import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title='28 de dezembro de 2023 às 23:04h' dateTime='2023-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>


                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, Parabéns!! </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                    Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}