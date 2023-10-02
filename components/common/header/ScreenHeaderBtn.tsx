import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

interface Props {
  iconUrl: any;
  dimension: string;
  handlePress: () => void;
}
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: Props) => {
  const result = styles.btnImg(dimension);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.btnContainer}
      onPress={handlePress}
    >
      <Image source={iconUrl} resizeMode="cover" style={result} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
