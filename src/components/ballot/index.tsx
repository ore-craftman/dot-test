import "components/ballot/ballot.scss";
import { Heading } from "components/Heading";
import { Card } from "./card";

interface PropSchema {
  id: string;
  items: { id: string; photoUrL: string; title: string }[];
  title: string;
}

export const Ballot = ({ data }: { data: PropSchema[] }) => {
  return (
    <>
      {data.map((item: PropSchema) => {
        return (
          <div key={item?.id}>
            <Heading size="sm" customClass="category-header">
              {item.title}
            </Heading>
            <Card data={item.items} />
          </div>
        );
      })}
    </>
  );
};
