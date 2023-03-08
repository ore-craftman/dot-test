import "components/flex/flex.scss";

interface PropSchema {
  children: JSX.Element[] | JSX.Element | string;
}

export const Flex = ({ children }: PropSchema) => {
  return <div className="flex">{children}</div>;
};
