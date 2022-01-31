import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PropertyCard.styles';
const PropertyCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />
      {/* image */}
      {/* text */}

      <Text style={styles.configText}>1 bed 11 washroom</Text>

      {/* type and description */}
      <Text style={styles.description} numberOfLines={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a
        voluptates esse, numquam nisi eligendi at distinctio praesentium facere
        officiis quas! Fugiat quos praesentium eum! Ipsa accusantium harum
        minima distinctio!
      </Text>
      {/* price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.newPrice}> $32 </Text>/ night
      </Text>

      <Text style={styles.totalPrice}>$230 total</Text>
      {/* totalprice */}
    </View>
  );
};

export default PropertyCard;
