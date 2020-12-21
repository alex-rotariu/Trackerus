import React, { useEffect } from "react";
import {
    SafeAreaView,
    Text,
    FlatList,
    StyleSheet,
    StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import TrackCard from "./TrackCard";

const SearchTracksList = ({ tracks }) => {
    const navigation = useNavigation();
    console.log(tracks)
    const renderItem = ({ item }) => <TrackCard track={item} />;
    return (
        <FlatList
            style={{ paddingVertical: 10, marginBottom: 20 }}
            showsVerticalScrollIndicator={false}
            data={tracks}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        />
    );
};

const styles = StyleSheet.create({});

export default SearchTracksList;
