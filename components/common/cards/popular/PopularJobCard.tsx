import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./popularjobcard.style";
import { TouchableOpacity } from "react-native";
import { checkImageUrl } from "../../../../utils";

interface Props {
  item: any;
  selectedJob: any;
}

const PopularJobCard = ({ item, selectedJob }: Props) => {
  const handleCardPress = (item: any) => {};
  return (
    <TouchableOpacity
      // @ts-ignore
      styles={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        // @ts-ignore
        style={styles.logoContainer(selectedJob, item)}
      >
        <Image
          source={{
            uri: checkImageUrl(item?.employer_logo)
              ? item?.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item?.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text
          // @ts-ignore
          style={styles.jobName(selectedJob, item)}
          numberOfLines={1}
        >
          {item?.job_title}
        </Text>
        <Text style={styles.location}>{item?.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
