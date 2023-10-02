import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";

import styles from "./welcome.style";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Jose!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              onChange={() => {}}
              placeholder="What are you looking for"
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tabsContainer}>
          <FlatList
            data={jobTypes}
            keyExtractor={(item) => item}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setActiveJobType(item);
                  router.push(`/search/${item}`);
                }}
                style={styles.tab(activeJobType, item)}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
