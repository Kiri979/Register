import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 14,
  },
});

export default styles;