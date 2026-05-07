import React from 'react';
import styles from '../styles/inicio.module.scss';
import { avisos } from '../mock/mockAvisos';

const Inicio = () => {
    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.header}>
                <h1>Inicio</h1>
                <p>Bienvenido, nombre.</p>
            </div>

            <div className={styles.contentGrid}>
                <div className={styles.sectionCard}>
                    <h2>Avisos Recientes</h2>
                    <div className={styles.avisosList}>
                        {avisos.length > 0 ? (
                            avisos.map(aviso => (
                                <div key={aviso.id} className={styles.avisoItem}>
                                    <div className={styles.avisoHeader}>
                                        <h4>{aviso.title}</h4>
                                        <span className={styles.date}>{aviso.date}</span>
                                    </div>
                                    <p>{aviso.content}</p>
                                </div>
                            ))
                        ) : (
                            <p style={{ color: '#666' }}>No hay avisos recientes.</p>
                        )}
                    </div>
                </div>

                <div className={styles.sectionCard}>
                    <h2>Accesos Rápidos</h2>
                    <p style={{ color: '#666' }}>Próximamente enlaces rápidos a las secciones más utilizadas.</p>
                </div>
            </div>
        </div>
    );
};

export default Inicio;