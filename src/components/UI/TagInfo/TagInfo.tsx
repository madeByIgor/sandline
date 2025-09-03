import React from "react";
import styles from "./style.module.css";
interface TagInfoProps {
  text: string;
  classNames?: string;
}

const TagInfo: React.FC<TagInfoProps> = ({ text, classNames }) => {
  return <div className={`${classNames} ${styles.wrapper}`}>{text}</div>;
};

export default TagInfo;
