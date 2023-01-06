import Head from 'next/head'
import Image from 'next/image'
import classes from 'src/components/Links/Links.module.css';

export function Links({items}) {
    return (
        <div className={classes.grid}>
            {items.map((item) =>{
                return(
                    <a key={item.href} href={item.href} className={classes.card}>
                    <h2 className={classes.title}>{item.title}</h2>
                    <p className={classes.description}>{item.description}</p>
                </a>
                )
            })}
            {/*<a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.card}
            >
                <h2 classname={classes.title}>Deploy &rarr;</h2>
                <p classname={classes.description}>
                    Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
            </a> */}
        </div>

    );
}

