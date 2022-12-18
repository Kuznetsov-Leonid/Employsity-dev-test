import styles from '../../styles/formula.module.scss';
import { AnimBottom } from '../animate/WueScroll';
//------------------------------------------------
import search from '../../public/order/search.svg';
import procent from '../../public/order/procent.svg';
import file from '../../public/order/file.svg';
import mail from '../../public/order/mail.svg';
import pay from '../../public/order/pay.svg';
import Image from 'next/image';
//------------------------------------------------

const FormulaList = () => {
    const FormulaList = [
        {id:1, img:search, txt:'Lorem ipsum dolor sit amet', display: styles.formula_inlinPoint},
        {id:2, img:procent, txt:'Сonsecteturadipiscing elit', display: styles.formula_inlinPoint},
        {id:3, img:file, txt:'Sed do eiusmod tempor', display: styles.formula_inlinPoint},
        {id:4, img:mail, txt:'Esse cillum doloreeu fugiat', display: styles.formula_inlinPoint},
        {id:5, img:pay, txt:'Excepteur sint occaecat cupidatat non proident', display: ''},
    ]
    return(
        <>
            <div className={styles.formula_desc}>
                <AnimBottom>
                <div className={styles.formula_desc_img}>
                    {FormulaList.map(({ id, img, txt, display }) => (
                        <>
                            <div
                                key       = {id}
                                className = {styles.formula_item}
                            >
                                <div className={styles.formula_item_img}>
                                    <Image 
                                        src         = {img} 
                                        alt         = {txt} 
                                        placeholder = 'blurDataURL'
                                    />
                                </div>
                            </div>
                            <div className={display}>
                                <div/>
                                <div/>
                                <div/>
                                <div/>
                                <div/>
                            </div>
                        </>
                    ))}
                </div>
                <div className={styles.formula_desc_txt}>
                    {FormulaList.map(({ id, txt }) => (
                        <>
                            <div key={id} className={styles.formula_item_txt}>
                                {txt}
                            </div>
                        </>
                    ))}
                </div>
                </AnimBottom>
            </div>

            
            <div className={styles.formula_mob}>
                <AnimBottom>
                    <div className={styles.formula_mob_img}>
                        {FormulaList.map(({ id, img, txt, display }) => (
                            <>
                                <div
                                    key       = {id}
                                    className = {styles.formula_item}
                                >
                                    <div className={styles.formula_item_img}>
                                        <Image 
                                            src         = {img} 
                                            alt         = {txt} 
                                            placeholder = 'blurDataURL'
                                        />
                                    </div>
                                </div>
                                <div key={id} className={styles.formula_item_txt}>
                                    {txt}
                                </div>
                                <div className={display}>
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                </div>
                            </>
                        ))}
                    </div>
                </AnimBottom>
            </div>
        </>
    );
}


export default FormulaList;