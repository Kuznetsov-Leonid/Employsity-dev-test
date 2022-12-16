/**
 * create by Kuznetsov Leonid
 * 16.12.2022
 */

import styles from '../../styles/order.module.scss';
import Container from '../container/container';
import { AnimBottom } from '../animate/WueScroll';
//------------------------------------------------
import search from '../../public/order/search.svg';
import procent from '../../public/order/procent.svg';
import file from '../../public/order/file.svg';
import mail from '../../public/order/mail.svg';
import pay from '../../public/order/pay.svg';
import Image from 'next/image';
//------------------------------------------------

const Order = () =>{

    // const FormulaList = [
    //     {id:1, img:search, txt:'Lorem ipsum dolor sit amet', display: styles.formula_inlinPoint},
    //     {id:2, img:procent, txt:'Сonsecteturadipiscing elit', display: styles.formula_inlinPoint},
    //     {id:3, img:file, txt:'Sed do eiusmod tempor', display: styles.formula_inlinPoint},
    //     {id:4, img:mail, txt:'Esse cillum doloreeu fugiat', display: styles.formula_inlinPoint},
    //     {id:5, img:pay, txt:'Excepteur sint occaecat cupidatat non proident', display: ''},
    // ]
    
    // const FormulaItem = () => {
    //     return(
    //         <>
    //             {FormulaList.map(({ id, img, txt, display }) => (
    //                 <>
    //                     <div
    //                         key       = {id}
    //                         className = {styles.formula_item}
    //                     >
    //                         <div className={styles.formula_item_img}>
    //                             <Image 
    //                                 src         = {img} 
    //                                 alt         = {txt} 
    //                                 placeholder = 'blurDataURL'
    //                             />
    //                         </div>
    //                         <div className={styles.formula_item_txt}>
    //                             <p>{txt}</p>
    //                         </div>
    //                     </div>
    //                     <div className={display}>
    //                         <div/>
    //                         <div/>
    //                         <div/>
    //                         <div/>
    //                         <div/>
    //                     </div>
    //                 </>
    //             ))}
    //         </>
    //     );
    // }

    return(
        <>
            <div className={styles.component}>
                <Container>
                    <AnimBottom>
                        <div className={styles.title}>
                            Оформление &nbsp; <blue>заказа</blue>
                        </div>
                        <div className={styles.sub_title}>
                            Перед заполнением формы ознакомьтесь с нашей схемой работы!
                        </div>
                    </AnimBottom>
                    <AnimBottom>
                        <div className={styles.formula}>
                            
                        </div>
                    </AnimBottom>
                </Container>
            </div>
        </>
    );
}

export default Order;