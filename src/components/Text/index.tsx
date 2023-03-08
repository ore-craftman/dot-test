import "components/Text/text.scss";

interface PropSchema {
  children: JSX.Element[] | JSX.Element | string;
  customStyle?: { [key: string]: string };
}

export const Text = ({ children, customStyle }: PropSchema) => {
  return <p style={customStyle}>{children}</p>;
};
