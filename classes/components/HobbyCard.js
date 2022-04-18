import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { COLORS, FONTFAMILY, SHADOW } from '../constants'

const HobbyCard = ({ name, iconUrl }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        width: 120,
        margin: 10,
        borderRadius: 18,
        marginBottom: 20,
        backgroundColor: COLORS.white,
        ...SHADOW.darkShadow,
        shadowColor: COLORS.lightBlue,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          minHeight: 120,
          width: "100%",
          padding: 15,
          borderRadius: 18,
          backgroundColor: COLORS.white,
        }}
      >
        <Image
          source={iconUrl}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
        <Text
          style={{
            fontFamily: FONTFAMILY.semiBold,
            fontSize: 18,
            color: COLORS.darkBlue,
            lineHeight: 20,
          }}
          numberOfLines={1}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );

export default HobbyCard