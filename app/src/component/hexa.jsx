import React, { useState } from 'react';
import DragMove from './drag';
import styles from "./main.module.css"
export const Hexa = ()=>{
    const [translate, setTranslate] = useState({
        x: 2,
        y: 2
      });
      const [move, setMove] = useState({
        x: 0,
        y: 0
      });
    
      
      const handleDragMove = (e) => {
        setTranslate({
          x: translate.x + e.movementX,
          y: translate.y + e.movementY
        });
      };
      const handleDragTrans = (e) => {
        setMove({
          x: move.x + e.movementX,
          y: move.y + e.movementY
        });
      };
    return <div className={styles.main_div}>
                <DragMove onDragMove={handleDragMove}>
                        <div className={styles.hex3} style={{
                        transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
                        }}></div>
                </DragMove>
                <DragMove onDragMove={handleDragTrans}>
                        <div className={styles.hex4} style={{
                        transform: `translateX(${move.x}px) translateY(${move.y}px)`
                        }}></div>
                </DragMove>
    </div>
}