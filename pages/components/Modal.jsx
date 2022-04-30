import React, { useState, useRef } from "react";
import { Modal, Group, Stack } from "@mantine/core";
import { Input, Button, Box, Select, Flex, Text } from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { Notification } from "@mantine/core";
import { Check, X } from "tabler-icons-react";

export default function ModalMessage() {
  const form = useRef();
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("0605000776");
  const [noti, setNoti] = useState(false);
  const { hasCopied, onCopy } = useClipboard(value);

  const FormSubmit = (e) => {
    alert(
      "Your Order has been received and an email will be sent to you shorty"
    );
    emailjs
      .sendForm(
        "service_woi7bk3",
        "template_cnbujto",
        form.current,
        "mrhvwkSx7vyWTZJtS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Box>
        <Modal
          className="text-gray-500 font-serif"
          centered
          size="md"
          opened={opened}
          onClose={() => setOpened(false)}
          title=" Pre-Order The Launin Kasa Tote "
        >
          <form onSubmit={FormSubmit} ref={form}>
            {" "}
            <Stack spacing={8}>
              <Box>
                <Input
                  required
                  className="text-gray-500 font-lato"
                  name="Name"
                  placeholder="Enter Name"
                />
              </Box>

              <Box my={4}>
                <Input
                  required
                  className="text-gray-500 font-lato"
                  name="Email"
                  placeholder="Enter Email"
                />
              </Box>

              <Box>
                <Input
                  required
                  className="text-gray-500 font-lato"
                  name="Phone"
                  placeholder="Enter Phone Number"
                />
              </Box>

              <Box>
                <Select
                  name="Size"
                  required
                  className="text-gray-500 font-lato"
                  my={4}
                  placeholder="Select The Size you Want"
                >
                  <option value="Small : H9 * L10.75 * W4">
                    Small : H9 * L10.75 * W4 - Price : 10,000NGN
                  </option>
                  <option value="Medium : H12 * 15.5 * 6">
                    Medium : H12 * 15.5 * 6 - Price : 15,000NGN
                  </option>
                  <option value="Large : H20 * L24 * W6">
                    Large : H20 * L24 * W6 - Price : 20,000NGN
                  </option>
                </Select>
                <Select
                  name="Delivery-Option"
                  required
                  className="text-gray-500 font-serif"
                  my={4}
                  placeholder="Delivery Option"
                >
                  <option value="Delivery">Delivery - Price : 1500NGN </option>
                  <option value="Collection">Collection </option>
                </Select>
                <Box>
                  <span className="text-gray-500 text-xs  font-lato lg:text-base mb-2">
                    Account Number | Bank - Parkway -ReadyCash
                  </span>
                  <Flex gap="2px" my={2}>
                    <Input
                      className="font-lato"
                      value={value}
                      isReadOnly
                      placeholder="Account Number"
                    />
                    <Button
                      className="text-gray-500 font-lato"
                      onClick={onCopy}
                      bgColor="black"
                      color="white"
                      _hover={{
                        bgColor: "#34434D",
                      }}
                      ml={2}
                    >
                      {hasCopied ? "Copied" : "Copy"}
                    </Button>
                  </Flex>
                </Box>
                <span className="text-gray-500 font-lato mt-2 text-xs lg:text-base mb-2">
                  Account Name : Studio orry
                </span>
              </Box>
              <p className="text-lg capitalize font-bold font-lato">
                Payment must be made to validate pre order
              </p>

              <Button
                type="submit"
                bgColor="black"
                color="white"
                _hover={{
                  bgColor: "#34434D",
                }}
              >
                Pre-Order Now
              </Button>
            </Stack>
          </form>
        </Modal>
        <Group position="center" className="my-4">
          <Button
            size="md"
            bgColor="black"
            color="white"
            _hover={{
              bgColor: "#34434D",
            }}
            onClick={() => setOpened(true)}
          >
            Pre-Order Now
          </Button>
        </Group>
      </Box>
    </>
  );
}
