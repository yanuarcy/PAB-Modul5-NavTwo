import { Text, Center, Box, Image, ScrollView, Divider } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <ScrollView>
      <Header title={"News"} withBack={true} />
      <Center flex={1}>
        <Box padding={"$0"}>
          <Image
            source={{ uri: params.image }}
            w={375}
            h={175}
            alt="Image Data"
          />
        </Box>
        {/* <Heading>News Detail</Heading> */}
        <Box padding={"$4"}>
          <Text textAlign="left" fontSize={"$sm"} my={"$3"}>{params.date}</Text>

          <Text textAlign="left"fontWeight="$900" fontSize={22} my={"$2"}>{params.title}</Text>
          <Divider />
          <Text textAlign="left">{params.content}</Text>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default NewsDetail;