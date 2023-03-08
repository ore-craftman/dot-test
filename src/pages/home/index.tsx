import { Ballot } from "components/ballot";
import { Container } from "components/container";
import { Heading } from "components/Heading";
import { useFetchReq } from "hooks/useFetchReq";

export const Home = () => {
  // Custom hook to fetch data
  const [data] = useFetchReq(`${process.env.REACT_APP_ENDPOINT}/getBallotData`);

  console.log("Data", data?.items);

  return (
    <>
      <Container>
        <Heading
          size="sm"
          customStyle={{ textAlign: "center", padding: ".5em 0em" }}
        >
          GOLDEN GLOBE AWARD
        </Heading>

        {data?.items && <Ballot data={data.items} />}
      </Container>
    </>
  );
};
