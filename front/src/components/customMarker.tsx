import {colors} from '@/constants';
import {MarkerColor} from '@/types/domain';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  LatLng,
  Marker,
  MapMarkerProps,
  MyMapMarkerProps,
} from 'react-native-maps';

interface CustomMarkerProps extends MyMapMarkerProps {
  coordinate?: LatLng;
  color: MarkerColor;
  score?: number;
}

const colorHex = {
  PINK: colors.PINK_400,
  BLUE: colors.BLUE_400,
  GREEN: colors.GREEN_400,
  ORANGE: colors.ORANGE_400,
  PURPLE: colors.PURPLE_400,
};

function CustomMarker({
  coordinate,
  color,
  score = 5,
  ...props
}: CustomMarkerProps) {
  const markerView = (
    <View style={styles.container}>
      <View style={[styles.marker, {backgroundColor: colorHex[color]}]}>
        <View style={[styles.eye, styles.leftEye]} />
        <View style={[styles.eye, styles.rightEye]} />
        {score > 3 && <View style={[styles.mouth, styles.good]} />}
        {score === 3 && <View style={styles.soso} />}
        {score < 3 && <View style={[styles.mouth, styles.bad]} />}
      </View>
    </View>
  );
  return coordinate ? (
    <Marker coordinate={coordinate} {...props}>
      {markerView}
    </Marker>
  ) : (
    markerView
  );
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 32,
    alignItems: 'center',
  },
  marker: {
    transform: [{rotate: '45deg'}],
    height: 27,
    width: 27,
    borderRadius: 27,
    borderBottomRightRadius: 1,
    borderWidth: 1,
    borderColor: colors.WHITE_000,
  },
  eye: {
    position: 'absolute',
    backgroundColor: colors.WHITE_000,
    width: 4,
    height: 4,
    borderRadius: 4,
  },
  leftEye: {
    top: 12,
    left: 5,
  },
  rightEye: {
    top: 5,
    left: 12,
  },
  mouth: {
    transform: [{rotate: '45deg'}],
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 12,
    borderTopColor: 'rgba(255, 255, 255 / 0.01)',
    borderBottomColor: 'rgba(255, 255, 255 / 0.01)',
  },
  good: {
    transform: [{rotate: '225deg'}],
    marginLeft: 6,
    marginTop: 6,
    borderRightColor: 'rgba(255, 255, 255 / 0.01)',
    borderLeftColor: colors.WHITE_000,
  },
  soso: {
    transform: [{rotate: '45deg'}],
    marginLeft: 13,
    marginTop: 13,
    width: 8,
    height: 8,
    borderLeftWidth: 2,
    borderLeftColor: colors.WHITE_000,
  },
  bad: {
    borderRightColor: 'rgba(255, 255, 255 / 0.01)',
    borderLeftColor: colors.WHITE_000,
    marginLeft: 12,
    marginTop: 12,
  },
});

export default CustomMarker;
