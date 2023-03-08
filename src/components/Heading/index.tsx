import "components/Heading/heading.scss";

interface PropSchema {
  children: JSX.Element[] | JSX.Element | string;
  size?: "sm" | "md" | "lg";
  customStyle?: { [key: string]: string };
  customClass?: string;
}

export const Heading = ({
  children,
  size,
  customStyle,
  customClass,
}: PropSchema) => {
  return (
    <>
      <h1
        className={`${size ? size : "lg"} ${customClass && customClass}`}
        style={customStyle}
      >
        {children}
      </h1>
    </>
  );
};
