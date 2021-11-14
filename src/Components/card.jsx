import styles from './card.module.css';

const CreateCard = () =>{
    return <div className={styles.container}>
        <div >
            <img src="https://celebratingsweets.com/wp-content/uploads/2018/06/Strawberry-Shortcake-Cake-1-1-500x500.jpg" alt="Strawberry Cake" className={styles.recipeImg}/>
        </div>
        <div className={styles.recipe}>
            <div className={styles.recipeName}>
               <h2>Strawberry Cake</h2>
            </div>
            <div className={styles.recipeLogo}>
                <img src="https://previews.123rf.com/images/jovanas/jovanas1611/jovanas161100044/65099463-wheat-icon-with-long-shadow.jpg" alt="logo" className={styles.recipeLogo}/>
            </div>
        </div>
        <div className={styles.recipeDesription}>
            <p>Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.</p>
        </div>
        <div className={styles.recipeGradient}>
            <div className={styles.recipeEnergy}>
                <p>346 Cal</p>
            </div>
            <div className={styles.recipeEnergy}>
                <p>P/F/C:6/14/49</p>
            </div>
            <div className={styles.recipeEnergy}>
                <p>13.9 ◦C</p>
            </div>
        </div>
        <div className={styles.recipeOrder}>
            <div className={styles.price}>$13.90</div>
            <div className={styles.crossPrice}>$18.90</div>
            <div> <button className={styles.orderBtn}>Order</button> </div>
        </div>
    </div>;
}

export default CreateCard;