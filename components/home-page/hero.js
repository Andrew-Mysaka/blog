import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
    return (
        <section className={classes.hero}>
            <Image className={classes.image}
                   src={"/images/site/andrii.png"}
                   alt={"An image showing Andrii"}
                   width={300}
                   height={300}
            />
            <h1>Hi, I'm Andrii</h1>
            <p>I blog about web development - especially frontend frameworks like React.</p>
        </section>
    );
}

export default Hero;