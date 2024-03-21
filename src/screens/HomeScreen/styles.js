import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  features: {
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 45,
  },
  just_bar: {
    width: 50,
    height: 6,
    borderRadius: 35,
    alignSelf: 'center',
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  search_bg: {
    width: '85%',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
    alignSelf: 'center',
    padding: 8,
    borderRadius: 30,
  },
  search: {
    backgroundColor: 'white',
    width: '100%',
    height: 45,
    borderRadius: 25,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  search_text: {
    fontWeight: '600',
    marginLeft: 10,
  },
  explore: {
    marginVertical:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    alignSelf: 'center',
  },
  explore_text: {
    fontWeight:'bold',
    color:'gray'
  },
  see_all_btn:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  see_all: {
    color:'gray'
  },
  services:{
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'red',
    alignSelf:'center'
  },
  bgimage:{
    width: '100%',
    height:180,
    position:'absolute',
    bottom:0,
    resizeMode:'stretch',
    opacity:0.5
  }
});

export default styles;
