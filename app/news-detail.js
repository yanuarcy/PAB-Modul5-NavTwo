import { Heading, Text, Center, Box, Image, ScrollView } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <ScrollView>
      <Header title={"News"} withBack={true} />
      <Center flex={1} padding={"$4"}>
        <Box>
          <Image
            source={{ uri: params.image }}
            w="$full"
            h="$full"
            alt="Image Data"
          />
        </Box>
        {/* <Heading>News Detail</Heading> */}
        <Text textAlign="left" style={{fontSize: 18}}>{params.date}</Text>

        <Text textAlign="left" style={{fontWeight: 900, fontSize: 22}}>{params.title}</Text>
        <Text textAlign="left">{params.content}</Text>
      </Center>
    </ScrollView>
  );
};

export default NewsDetail;