import styles from "./Button.module.css";

interface IButtonProps {
  block?: boolean;
  classList?: string;
  disabled?: boolean;
  href?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  iconClassList?: string;
  shape?: "" | "pill" | "rounded" | "square";
  text: string;
  variant?: "" | "filled" | "outlined";
  onclick?: () => void;
}

export const Button = ({
  block = false,
  classList,
  disabled,
  href,
  icon,
  iconPosition = "left",
  iconClassList,
  shape = "rounded",
  text,
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
      data-variant={variant}
      data-shape={shape}
      {...(block && { "data-block": true })}
      {...(href && { href })}
      onClick={onclick}
    >
      {icon && iconPosition === "left" && renderIcon()}
      {text}
      {icon && iconPosition === "right" && renderIcon()}
    </Tag>
  );
};
