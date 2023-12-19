import styles from "./Button.module.css";

interface IButtonProps {
  block?: boolean;
  classList?: string;
  color?: "white" | "black" | "grey" | "green" | "teal";
  disabled?: boolean;
  href?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  iconClassList?: string;
  loading?: boolean;
  shape?: "" | "pill" | "rounded";
  text: string;
  theme?: "primary" | "secondary";
  underline?: boolean;
  variant?: "" | "filled" | "outlined";
  onclick?: () => void;
}

export const Button = ({
  block = false,
  classList,
  color = "black",
  disabled,
  href,
  icon,
  iconPosition = "left",
  iconClassList,
  loading,
  shape = "rounded",
  text,
  theme = "primary",
  underline,
  variant = "",
  onclick,
}: IButtonProps): React.ReactElement<IButtonProps> => {
  const Tag = href ? "a" : "button";

  const renderIcon = () => {
    return <img src={icon} alt="" className={iconClassList} data-hidden />;
  };

  return (
    <Tag
      className={`${styles.button} ${classList}`}
      disabled={disabled}
      data-color={color}
      data-shape={shape}
      data-theme={theme}
      data-variant={variant}
      {...(block && { "data-block": true })}
      {...(loading && { "data-loading": true })}
      {...(underline && { "data-underline": true })}
      {...(href && { href })}
      onClick={onclick}
    >
      {icon && iconPosition === "left" && renderIcon()}
      {text}
      {icon && iconPosition === "right" && renderIcon()}
    </Tag>
  );
};
