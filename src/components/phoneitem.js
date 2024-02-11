import { StyleSheet } from "react-native";

const CarItem = props => {
    const {brand, year, color} = props;
    // const brand = props.brand
    // const year = props.year
    // const color = props.color
  
    const [like /** state */ , setLike /*setState */] = useState(0)
  
    // var like = 0;
  
    const onItemPress = () => {
      // like++;
      setLike(like +1 )
    };
  
    console.log('likes: ', like , "brand: " , brand);
  
  
    return (
      <TouchableOpacity onPress={onItemPress}>
        <View style={styles.container}>
          <View style={styles.txtContainer}>
            <Text style={styles.txt}>{`Brand: ` + props.brand}</Text>
            <Text style={styles.txt}>{`Year: ${year}`}</Text>
            <Text style={styles.txt}>{'color: ' + color}</Text>
            <Text style={styles.txt}>{'like: ' + like}</Text>
          </View>
          {!hideImage && <Image style={styles.img} source={props.img} />}
        </View>
      </TouchableOpacity>
    );
  };
  
  export default CarItem;
  
  const styles = StyleSheet.create({
    txt: {
      fontSize: 25,
    },
    container: {
      borderWidth: 1,
      paddingLeft: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      color:'red',
    },
    plus: {
      fontSize: 45,
      textAlign: 'center',
    },
    plusContainer: {
      borderWidth: 1,
      flex: 1,
    },
    txtContainer: {
      flex: 1,
    },
    img: {
      width: 180,
      height: 180,
      resizeMode: 'contain',
    },
  });