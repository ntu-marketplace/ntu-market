import { Button, Link as ChakraLink } from "@chakra-ui/react";
function MyButton(props, text) {
  return (
    <ChakraLink href={props}>
      <Button size='md'>{text}</Button>
    </ChakraLink>
  );
}
export default MyButton;