import "components/container/container.scss";

interface PropSchema {
  children: JSX.Element[] | JSX.Element | string;
}

export const Container = ({ children }: PropSchema) => {
  return <div className="container">{children}</div>;
};
