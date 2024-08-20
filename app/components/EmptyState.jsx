import { Image, Text, View } from "react-native";
import React, { Component } from "react";
import { images } from "../../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>
      <Text className="font-psemibold text-center text-xl text-white mt-2">
        {title}
      </Text>
      <CustomButton
        title="Create video"
        handlePress={() => router.push("/create")}
        extraStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
