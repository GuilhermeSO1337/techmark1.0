import styles from "./../styles/Comment.module.css";
import { ReactDOM } from "react";
import { Icon } from '@iconify/react';


export default function ClientComment(comment){
    let FeedbackStars = [];
    for(let count = comment.evaluation; count>0; count--){
        FeedbackStars.push(<Icon icon="typcn:star" color="#FFA800" width="25px"/>);
    }
    return(
        <div className={styles.Comment}>
            <img src={comment.UserProfilePicture} alt=""/>
            <div className={styles.NameAndStars}>
                <h2>{comment.UserName}</h2>
                <div className={styles.Stars}>{FeedbackStars.map((FeedbackStars)=>{ return FeedbackStars})}</div>
            </div>
            <p className={styles.CommentText}>{comment.Comment}</p>
            <div className={styles.Time}>
                <p>{comment.Time}</p>
            </div>
        </div>
    );
}