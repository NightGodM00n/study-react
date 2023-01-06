import classes from 'src/components/Headline/Headline.module.css';

export const Headline = (props)=> {
    // console.log(props);
    return (
        <div>
            <h1 className={classes.title}>
                {props.page} page<a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className={classes.description}>
                {/* Get started by editing {props.children} */}
                アイテムの数は {props.children}　個
            </p>
            <button onClick={props.handleReduce}>減らす</button>
            {/* <button onClick={props.onClick}>ボタン</button> */}
        </div>
    )
}
