import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  listStyle: {width: width / 3, height: height / 6, margin: 2},
});

export default styles