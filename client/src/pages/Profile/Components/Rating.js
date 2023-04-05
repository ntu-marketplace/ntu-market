import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";

function Rating({value}) {
// const check =() =>{
//     console.log(value);
//     return true;
// }
  const stars = [];
  for (let i = 0; i < value; i++) {
    // check();
    stars.push(
      <StarIcon key={i} color="yellow.500" w={6} h={6} />
    );
  }

  return (
    <Flex align="center">
      {stars}
    </Flex>
  );
}

export default Rating;