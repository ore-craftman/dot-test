import swal from "sweetalert";
import "components/ballot/card/card.scss";
import { Flex } from "components/flex";
import { Text } from "components/Text";
import { useState } from "react";

interface PropSchema {
  id: string;
  photoUrL: string;
  title: string;
}

export const Card = ({ data }: { data: PropSchema[] }) => {
  const [selectedNominee, setSelectedNominee]: any = useState(null);

  const selectHandler = (id: string) => {
    // Handle diselection and selection
    if (id === selectedNominee) return setSelectedNominee(null);
    return setSelectedNominee(id);
  };

  const submitHandler = () => {
    // Throw error if nominee was not selected esle return success message
    if (!selectedNominee)
      return swal("Error!", "Kindly select a nominee.", "warning");
    else
      return swal(
        "Success!",
        "Your vote as been submitted successfully.",
        "success"
      );
  };

  return (
    <>
      <Flex>
        {data.map((item: PropSchema, idx) => {
          return (
            <>
              <div
                key={item.id}
                className={`card ${selectedNominee === item.id && "selected"}`}
              >
                <Text customStyle={{ textAlign: "center", fontWeight: "500" }}>
                  {item.title}
                </Text>
                <img src={item.photoUrL} alt={item.title} />
                <button onClick={() => selectHandler(item.id)}>Select</button>
              </div>
              {/* Place submit button at the end of items */}
              {idx === data.length - 1 && (
                <button className="submit-btn" onClick={submitHandler}>
                  SUBMIT VOTE
                </button>
              )}
            </>
          );
        })}
      </Flex>
    </>
  );
};
