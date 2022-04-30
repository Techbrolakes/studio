import React, { useState } from "react";
import { Modal, Group, Stack } from "@mantine/core";
import { Input, Button, Box, Select, Flex } from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";

export default function ModalMessage() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("0505171495");
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <>
      <Box>
        <Modal
          className="text-gray-500 font-serif"
          centered
          size="md"
          opened={opened}
          onClose={() => setOpened(false)}
          title=" Preorder The Launin Kasa Tote "
        >
          <form>
            <Stack spacing={8}>
              <Box>
                <Input
                  className="text-gray-500 font-serif"
                  name="Name"
                  placeholder="Enter Name"
                />
              </Box>

              <Box my={4}>
                <Input
                  className="text-gray-500 font-serif"
                  name="Email"
                  placeholder="Enter Email"
                />
              </Box>

              <Box>
                <Input
                  className="text-gray-500 font-serif"
                  name="Phone"
                  placeholder="Enter Phone Number"
                />
              </Box>

              <Box>
                <Select
                  className="text-gray-500 font-serif"
                  my={4}
                  placeholder="Select The Size you Want"
                >
                  <option value="option1">Small : H9 * L10.75 * W4</option>
                  <option value="option2">Medium : H12 * 15.5 * 6</option>
                  <option value="option3">Large : H20 * L24 * W6</option>
                </Select>
                <Select
                  className="text-gray-500 font-serif"
                  my={4}
                  placeholder="Delivery Option"
                >
                  <option value="option1">Delivery </option>
                  <option value="option2">Collection </option>
                </Select>
                <Box>
                  <span className="text-gray-500 text-xs lg:text-base mb-2">
                    Account Number | Bank -Gt Bank
                  </span>
                  <Flex gap="2px">
                    <Input
                      value={value}
                      isReadOnly
                      placeholder="Account Number"
                    />
                    <Button
                      className="text-gray-500 font-serif"
                      onClick={onCopy}
                      colorScheme="red"
                      ml={2}
                    >
                      {hasCopied ? "Copied" : "Copy"}
                    </Button>
                  </Flex>
                </Box>
              </Box>

              <Button type="submit" colorScheme="red">
                Preorder
              </Button>
            </Stack>
          </form>
        </Modal>
        <Group position="center" className="my-4">
          <Button size="md" colorScheme={"red"} onClick={() => setOpened(true)}>
            Preorder
          </Button>
        </Group>
      </Box>
    </>
  );
}
