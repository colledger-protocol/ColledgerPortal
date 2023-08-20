import styles from "./Button.module.scss";

const GoButton = ({
  onClickHandler,
  title,
  customContainerStyle,
  isDisabled,
}) => {
  return (
    <button
      onClick={onClickHandler}
      type="button"
      style={customContainerStyle}
      className={`${styles.buttonContainer} ${
        isDisabled
          ? styles.filledDisabledButtonContainer
          : styles.filledButtonContainer
      }`}
      disabled={isDisabled}
    >
      <span className={styles.filledButtonText}>{title}</span>
    </button>
  );
};
export default GoButton;
