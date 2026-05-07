import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import styles from '../styles/inicio.module.scss';
import { avisos } from '../mock/mockAvisos';

const Inicio = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.header}>
                <h1>Inicio</h1>
                <p>{user?.sexo === 'Femenino' ? 'Bienvenida' : 'Bienvenido'}, {user?.nombre}.</p>
            </div>

            <div className={styles.contentGrid}>
                <div>
                    <div className={styles.sectionCard}>
                        <h2>Avisos Recientes</h2>
                        <div className={styles.avisosList}>
                            {avisos.length > 0 ? (
                                avisos.slice(0, 3).map(aviso => (
                                    <div key={aviso.id} className={styles.avisoItem}>
                                        <div className={styles.avisoHeader}>
                                            <h4>{aviso.title}</h4>
                                            <span className={styles.date}>{aviso.date}</span>
                                        </div>
                                        <p>{aviso.content}</p>
                                    </div>
                                ))
                            ) : (
                                <p className={styles.emptyMessage}>No hay avisos recientes.</p>
                            )}
                        </div>
                    </div>
                    {avisos.length > 3 && (
                        <p className={styles.verMasLink} onClick={() => navigate('/avisos')}>Ver mas...</p>
                    )}
                </div>

                <div className={styles.sectionCard}>
                    <h2>Accesos Rápidos</h2>
                    <p className={styles.emptyMessage}>Próximamente enlaces rápidos a las secciones más utilizadas.</p>
                </div>
            </div>
        </div>
    );
};

export default Inicio;