import classes from 'src/components/Headline/Headline.module.css';

export function Headline(props) {
    console.log(props);
    return (
        <div>
            <h1 className={classes.title}>
             {props.page} page<a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className={classes.description}>
                Get started by editing {props.children}
            </p>
            <button onClick={props.onClick}>ボタン</button>
        </div>
    )
}
